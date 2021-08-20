const period = (1 / 60) * 1000;
const maxVelocity = 0.1;
const minVelocity = 0.01;
const minigameHeight = 260;
const minigameWidth = 350;
const moleculeHeight = 30;
const moleculeWidth = 30;

//Initialize game

var moleculeState = generateNewLocation();


//
window.setInterval(() => {
    // Update x and y in moleculeState using period and xVel and y  Vel
    // Draw molecule using moleculeState
    // Exception handling
    var xDiff = moleculeState.xVel * period;
    var yDiff = moleculeState.yVel * period;

    //Checking if outside box in end x-direction, changing x-direction and calculate new xpos
    if (((moleculeState.x + xDiff) * minigameWidth + moleculeWidth) >= minigameWidth) {

        xDiff *= -1;
        moleculeState.xVel *= (-1);

        /*moleculeState.x += (((moleculeState.x + xDiff) * minigameWidth + moleculeWidth) - minigameWidth);
        break;*/
    }

    //Checking if outside box in end y-direction, changing y-direction and calculate new ypos
    if (((moleculeState.y + yDiff) * minigameHeight + moleculeHeight) >= minigameHeight) {

        yDiff *= -1;
        moleculeState.yVel *= (-1);
        moleculeState.y += (((moleculeState.y + yDiff) * minigameHeight + moleculeHeight) - minigameHeight);
        break;
    }

    //Checking if outside box in start y-direction, changing y-direction and calculate new ypos
    if (((moleculeState.y + yDiff) * minigameHeight + moleculeHeight) <= 0) {

        yDiff *= -1;
        moleculeState.yVel *= -1;
        moleculeState.y += (((moleculeState.y + yDiff) * minigameHeight + moleculeHeight) - minigameHeight);
        break;
    }
    //Checking if outside box in start x-direction, changing x-direction and calculate new xpos
    if (((moleculeState.x + xDiff) * minigameWidth + moleculeWidth) <= 0) {

        xDiff *= -1;
        moleculeState.xVel *= -1;
        moleculeState.x += (((moleculeState.x + xDiff) * minigameWidth + moleculeWidth) - minigameWidth);
        break;
    }

    moleculeState.x += xDiff;
    moleculeState.y += yDiff;


    document.getElementById("minigame_H2S_molecule").setAttribute("style", `top: ${moleculeState.y * minigameHeight}px; left: ${moleculeState.x * minigameWidth}px`)
}, period);

function generateNewLocation() {
    return {
        x: Math.random(),
        y: Math.random(),
        xVel: Math.random()
            * (maxVelocity - minVelocity) + minVelocity,
        yVel: Math.random() * (maxVelocity - minVelocity) + minVelocity
    };
}

