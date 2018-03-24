let arrOfFx = [];
let animationStatus = false;
let animationStylePicker = {
    shades: ["#C70039", "#FF5733", "#FFC305"],
    // shades: ["#CE5A57", "#7BA5A3", "#E1B16A"],
    r: [1.5, 3, 5],
    ballCounter: 0,
    maxCounter: 5000000
}

$(document).ready(() => {
    // Initiating canvas sizes and drawing text on to canvas
    $("#animation").width(window.innerWidth);
    $("#animation").height(window.innerHeight);
    $("#animation, #animation-drawing").hide();
    centerText("Canvas", contextAnimationDrawing, canvasAnimationDrawing);

    $(".navbar").click(() => {
        if (animationStatus) {
            $("#animation, #animation-drawing").hide();
            cleanInterval(arrOfFx);
            animationStatus = false;
        } else {
            $("#animation, #animation-drawing").show();
            parallelFx(arrOfFx, looping, 1000);
            animationStatus = true;
        }
    });
})

// Initiate ball and draw it on certain location
class Ball {
    constructor(coord, radius, color) {
        this.x = coord[0];
        this.y = coord[1];
        this.r = radius;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.closePath();
        context.fill();
    }
}

// Drawing desirable text into the destinated canvas 
function centerText(centxt, context, canvas) {
    context.fillStyle = "rgba(254, 254, 254, 1)";
    context.font = '300px serif';
    context.textAlign = 'center';
    context.fillText(centxt, canvas.width / 2, (canvas.height / 2) + 100);
}




// Check if the ball counter has reached to its max, if not, draw rand ball in spot with trans pixel
function looping() {
    if (animationStylePicker.ballCounter < animationStylePicker.maxCounter) {
        // Create random coordinates
        let coordinate = [randInclusive(0, $("#animation").width()), randInclusive(0, $("#animation").height())];
        if (checkPix(contextAnimationDrawing, coordinate[0], coordinate[1]) && checkPix(contextAnimation, coordinate[0], coordinate[1])) {
            let ball = new Ball(coordinate, animationStylePicker.r[randInclusive(0, animationStylePicker.r.length)], animationStylePicker.shades[randInclusive(0, animationStylePicker.shades.length)]);
            // Actually draw that ball
            ball.draw(contextAnimation);
            animationStylePicker.ballCounter++;
        }
    }

}

