"use strict";
const canvasReal = document.getElementById("canvas-real");
const canvasDraft = document.getElementById("canvas-draft");
const canvasIndicator = document.getElementById("canvas-indicator");
const canvasRuler = document.getElementById("canvas-ruler");
const canvasAnimation = document.getElementById("animation");
const canvasAnimationDrawing = document.getElementById("animation-drawing");
if (canvasReal instanceof HTMLCanvasElement &&
    canvasDraft instanceof HTMLCanvasElement &&
    canvasIndicator instanceof HTMLCanvasElement &&
    canvasRuler instanceof HTMLCanvasElement &&
    canvasAnimation instanceof HTMLCanvasElement &&
    canvasAnimationDrawing instanceof HTMLCanvasElement) {
    const contextReal = canvasReal.getContext("2d");
    const contextDraft = canvasDraft.getContext("2d");
    const contextIndicator = canvasIndicator.getContext("2d");
    const contextRuler = canvasRuler.getContext("2d");
    const contextAnimation = canvasAnimation.getContext("2d");
    const contextAnimationDrawing = canvasAnimationDrawing.getContext("2d");
}
// let currentFunction:(contextReal: CanvasRenderingContext2D, contextDraft: CanvasRenderingContext2D )=> void;
let currentFunction;
let dragging = false;
// Styling setting of canvas, applicable to both draft and real canvas(s)
const canvasSettings = {
    brushSize: 8,
    joint: "round",
    curCol: {
        stroke: "#ff0000",
        fill: "#00ff00",
        bgc: "#FFFFFF"
    },
    txt: {
        size: "48px",
        fontfamily: "serif"
    }
};
// initialize canvas
const canvases = document.querySelectorAll("canvas");
canvases.forEach(canvas => {
    let wd = $(".structure").width();
    let wh = $(".structure").height();
    if (typeof wd == "number" && typeof wh == "number") {
        console.log("set canvas sizes");
        canvas.width = wd;
        canvas.height = wh;
    }
    else {
        throw new Error("Width and Height are not number");
    }
});
class PaintFunction {
    constructor() { }
    onMouseDown() { }
    onDragging() { }
    onMouseMove() { }
    onMouseUp() { }
    onMouseLeave() { }
    onMouseEnter() { }
}
// $("#canvas-draft").mousedown(e => {
//   const mouseLoc = [e.offsetX, e.offsetY];
//   currentFunction.onMouseDown(mouseLoc, e, canvasSettings);
//   dragging = true;
// });
// $("#canvas-draft").mousemove(e => {
//   const mouseLoc = [e.offsetX, e.offsetY];
//   if (dragging) {
//     currentFunction.onDragging(mouseLoc, e, canvasSettings);
//   }
//   currentFunction.onMouseMove(mouseLoc, e, canvasSettings);
// });
// $("#canvas-draft").mouseup(e => {
//   dragging = false;
//   const mouseLoc = [e.offsetX, e.offsetY];
//   currentFunction.onMouseUp(mouseLoc, e, canvasSettings);
// });
// $("#canvas-draft").mouseleave(e => {
//   dragging = false;
//   const mouseLoc = [e.offsetX, e.offsetY];
//   currentFunction.onMouseLeave(mouseLoc, e, canvasSettings);
// });
// $("#canvas-draft").mouseenter(e => {
//   const mouseLoc = [e.offsetX, e.offsetY];
//   currentFunction.onMouseEnter(mouseLoc, e, canvasSettings);
// });
