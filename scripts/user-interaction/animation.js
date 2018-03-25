"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utility_1 = require("../common/utility");
let arrOfFx = [];
let animationStatus = false;
let animationStylePicker = {
    shades: ["#C70039", "#FF5733", "#FFC305"],
    r: [1.5, 3, 5],
    ballCounter: 0,
    maxCounter: 5000000
};
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
    context.font = "300px serif";
    context.textAlign = "center";
    context.fillText(centxt, canvas.width / 2, canvas.height / 2);
}
// Check if the ball counter has reached to its max, if not, draw rand ball in spot with trans pixel
function looping() {
    if (animationStylePicker.ballCounter < animationStylePicker.maxCounter) {
        // Create random coordinates
        let canvasWidth = $("#animation").width();
        let canvasHeight = $("#animation").height();
        if (typeof canvasWidth === "number" && typeof canvasHeight === "number") {
            let coordinate = [
                utility_1.randInclusive(0, canvasWidth),
                utility_1.randInclusive(0, canvasHeight)
            ];
            if (utility_1.checkPix(contextAnimationDrawing, coordinate[0], coordinate[1]) &&
                utility_1.checkPix(contextAnimation, coordinate[0], coordinate[1])) {
                let ball = new Ball(coordinate, animationStylePicker.r[utility_1.randInclusive(0, animationStylePicker.r.length)], animationStylePicker.shades[utility_1.randInclusive(0, animationStylePicker.shades.length)]);
                // Actually draw that ball
                ball.draw(contextAnimation);
                animationStylePicker.ballCounter++;
            }
        }
    }
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
            utility_1.cleanInterval(arrOfFx);
            animationStatus = false;
        }
        else {
            $("#animation, #animation-drawing").show();
            utility_1.parallelFx(arrOfFx, looping, 1000);
            animationStatus = true;
        }
    });
});
