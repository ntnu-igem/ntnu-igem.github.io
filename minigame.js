const timeDiff = (1 / 60) * 1000;
const maxVelocity = 0.3;
const minVelocity = 0.01;
const minigameHeight = 260;
const minigameWidth = 350;
const moleculeHeight = 30;
const moleculeWidth = 30;
const fishWidth = 80;
const fishHeight = 80;
let mouseX = 0;
let mouseY = 0;
let timesHit = 0;


const canvasGfx = document.getElementById('team_minigame');
const ctx = canvasGfx.getContext('2d');
canvasGfx.setAttribute("width", 360);
canvasGfx.setAttribute("height", 250);


//Initialize game
var moleculeState = generateNewLocation();
var imgContainer = { minigame_H2S: 'Pictures/H2S.svg', fishes: ['Pictures/fish.png', 'Pictures/fishSick1.png', 'Pictures/fishSick2.png', 'Pictures/fishSick3.png', 'Pictures/fishDead.png'] };
canvasGfx.onmousemove = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
};

imgContainer.minigame_H2S = {
    img: (function () {
        var img = new Image();
        img.src = imgContainer.minigame_H2S;
        return img;
    })(),
    isLoaded: false
};
imgContainer.minigame_H2S.img.onload = function () {
    imgContainer.minigame_H2S.isLoaded = true;
};
for (let key in imgContainer.fishes) {

    imgContainer.fishes[key] = {
        img: (function () {
            var img = new Image();
            img.src = imgContainer.fishes[key];
            return img;
        })(),
        isLoaded: false
    };


    imgContainer.fishes[key].img.onload = function () {
        imgContainer.fishes[key].isLoaded = true;
    };
}

console.log(imgContainer);

function isContainerLoaded() {
    for (let key in imgContainer.fishes) {
        if (imgContainer.fishes[key].isLoaded == false) {
            return false;
        }
    }
    if (imgContainer.minigame_H2S.isLoaded == false) {
        return false;
    }
    return true;
}

while (!isContainerLoaded) { }

console.log("LOADED")

//Animating molecule every 1/60 second.
let prevTimestamp;
function step(timestamp) {

    ctx.clearRect(0, 0, canvasGfx.width, canvasGfx.height);
    const relativeRect = canvasGfx.getBoundingClientRect();

    const localMouseX = ((mouseX - relativeRect.left) / (relativeRect.right - relativeRect.left)) * minigameWidth - 0.5 * fishWidth;
    const localMouseY = ((mouseY - relativeRect.top) / (relativeRect.bottom - relativeRect.top)) * minigameHeight - 0.5 * fishHeight;

    /*    if ((localMouseX - 0.5 * fishWidth) <= 0 || (localMouseX + 0.5 * fishWidth) >= minigameWidth || (localMouseY - 0.5 * fishHeight) <= 0 || (localMouseY + 0.5 * fishHeight) >= minigameHeight) {
            prevTimestamp = timestamp;
            console.log("Treg");
            window.requestAnimationFrame(step);
        } funker ikke teite ting*/



    if (prevTimestamp === undefined) {
        prevTimestamp = timestamp;
    }
    const timeDiff = timestamp - prevTimestamp;

    // Update x and y in moleculeState using timeDiff, xVel and yVel
    // Draw molecule using moleculeState
    // Exception handling
    moleculeState.x += moleculeState.xVel * timeDiff / 1000;
    moleculeState.y += moleculeState.yVel * timeDiff / 1000;

    //Checking if outside box in end x-direction, changing x-direction and assign new xpos
    if ((moleculeState.x * minigameWidth + moleculeWidth) >= minigameWidth) {

        moleculeState.xVel *= (-1);
        moleculeState.x = (minigameWidth - moleculeWidth) / minigameWidth;
    }
    //Checking if outside box in end y-direction, changing y-direction and assign new ypos
    if ((moleculeState.y * minigameHeight + moleculeHeight) >= minigameHeight) {

        moleculeState.yVel *= (-1);
        moleculeState.y = (minigameHeight - moleculeHeight) / minigameHeight;
    }
    //Checking if outside box in start y-direction, changing y-direction and calculate new ypos
    if ((moleculeState.y * minigameHeight) <= 0) {

        moleculeState.yVel *= -1;
        moleculeState.y = 0;
    }
    //Checking if outside box in start x-direction, changing x-direction and calculate new xpos
    if ((moleculeState.x * minigameWidth) <= 0) {

        moleculeState.xVel *= -1;
        moleculeState.x = 0;
    }

    //Update hitbox of fish
    //The four limits
    let upperCollision = (localMouseY - 0.5 * fishHeight - (moleculeState.y * minigameHeight + moleculeHeight)) <= 0;
    let lowerCollision = (localMouseY + 0.5 * fishHeight - moleculeState.y * minigameHeight) >= 0;
    let leftCollision = (localMouseX - 0.5 * fishWidth - moleculeState.x * minigameWidth) <= 0;
    let rightCollision = (localMouseX + 0.5 * fishWidth - (moleculeState.x * minigameWidth + moleculeWidth)) >= 0;

    if (upperCollision && !lowerCollision) {
        ++timesHit;
        moleculeState = generateNewLocation();
    }
    /*
        if (!upperCollision && lowerCollision) {
            ++timesHit;
            moleculeState = generateNewLocation();
        }
    
        if (leftCollision && !rightCollision) {
            ++timesHit;
            moleculeState = generateNewLocation();
        }
    
        if (!leftCollision && rightCollision) {
            ++timesHit;
            moleculeState = generateNewLocation();
        }
    */
    console.log(timesHit);
    ctx.drawImage(imgContainer.minigame_H2S.img, moleculeState.x * minigameWidth, moleculeState.y * minigameHeight, moleculeWidth, moleculeHeight);
    ctx.drawImage(imgContainer.fishes[timesHit].img, localMouseX, localMouseY, fishWidth, fishHeight);
    prevTimestamp = timestamp;
    window.requestAnimationFrame(step);
};

window.requestAnimationFrame(step);

function generateNewLocation() {
    return {
        x: Math.random(),
        y: Math.random(),
        xVel: Math.random()
            * (maxVelocity - minVelocity) + minVelocity,
        yVel: Math.random() * (maxVelocity - minVelocity) + minVelocity
    };
}

