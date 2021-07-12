const timeDiff = (1 / 60) * 1000;
const maxVelocity = 0.3;
const minVelocity = 0.01;
const minigameHeight = 260;
const minigameWidth = 350;
const moleculeHeight = 30;
const moleculeWidth = 30;
const fishWidth = 100;
const fishHeight = 100;
let mouseX = 0;
let mouseY = 0;


const canvasGfx = document.getElementById('team_minigame');
const ctx = canvasGfx.getContext('2d');
canvasGfx.setAttribute("width", 360);
canvasGfx.setAttribute("height", 250);


//Initialize game
var moleculeState = generateNewLocation();
var imgContainer = { fish: 'Pictures/fish.png', minigame_H2S: 'Pictures/H2S.svg' };
canvasGfx.onmousemove = function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
};

for (let key in imgContainer) {

    imgContainer[key] = {
        img: (function () {
            var img = new Image();
            img.src = imgContainer[key];
            return img;
        })(),
        isLoaded: false
    };

    imgContainer[key].img.onload = function () {
        imgContainer[key].isLoaded = true;
    };
}

function isContainerLoaded() {
    for (let key in imgContainer) {
        if (imgContainer[key].isLoaded == false) {
            return false;
        }
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

    const localMouseX = mouseX - relativeRect.left - 0.5 * fishWidth;
    const localMouseY = mouseY - relativeRect.top - 0.5 * fishHeight;

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

    ctx.drawImage(imgContainer.minigame_H2S.img, moleculeState.x * minigameWidth, moleculeState.y * minigameHeight, moleculeWidth, moleculeHeight);
    ctx.drawImage(imgContainer.fish.img, localMouseX, localMouseY, fishWidth, fishHeight);
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

