// const canvasReal = document.getElementById("canvas-real");
// const canvasDraft = document.getElementById("canvas-draft");
// const canvasIndicator = document.getElementById("canvas-indicator");
// const canvasRuler = document.getElementById("canvas-ruler");
// const canvasAnimation = document.getElementById("animation");
// const canvasAnimationDrawing = document.getElementById("animation-drawing");

let canvasReal: HTMLCanvasElement;
let canvasDraft: HTMLCanvasElement;
let canvasIndicator: HTMLCanvasElement;
let canvasRuler: HTMLCanvasElement;
let canvasAnimation: HTMLCanvasElement;
let canvasAnimationDrawing: HTMLCanvasElement;

// const contextReal = (<HTMLCanvasElement>canvasReal).getContext('2d');
// const contextDraft = (<HTMLCanvasElement>canvasReal).getContext('2d');
// const contextIndicator = (<HTMLCanvasElement>canvasReal).getContext('2d');
// const contextRuler = (<HTMLCanvasElement>canvasReal).getContext('2d');
// const contextAnimation = (<HTMLCanvasElement>canvasReal).getContext('2d');
// const contextAnimationDrawing = (<HTMLCanvasElement>canvasReal).getContext('2d');
let contextReal: CanvasRenderingContext2D;
let contextDraft: CanvasRenderingContext2D;
let contextIndicator: CanvasRenderingContext2D;
let contextRuler: CanvasRenderingContext2D;
let contextAnimation: CanvasRenderingContext2D;
let contextAnimationDrawing: CanvasRenderingContext2D;

try {
  canvasReal =
    <HTMLCanvasElement>document.getElementById("canvas-real") ||
    new HTMLCanvasElement();
  canvasDraft =
    <HTMLCanvasElement>document.getElementById("canvas-draft") ||
    new HTMLCanvasElement();
  canvasIndicator =
    <HTMLCanvasElement>document.getElementById("canvas-indicator") ||
    new HTMLCanvasElement();
  canvasRuler =
    <HTMLCanvasElement>document.getElementById("canvas-ruler") ||
    new HTMLCanvasElement();
  canvasAnimation =
    <HTMLCanvasElement>document.getElementById("animation") ||
    new HTMLCanvasElement();
  canvasAnimationDrawing =
    <HTMLCanvasElement>document.getElementById("animation-drawing") ||
    new HTMLCanvasElement();

  contextReal =
    (<HTMLCanvasElement>canvasReal).getContext("2d") ||
    new CanvasRenderingContext2D();
  contextDraft =
    (<HTMLCanvasElement>canvasDraft).getContext("2d") ||
    new CanvasRenderingContext2D();
  contextIndicator =
    (<HTMLCanvasElement>canvasIndicator).getContext("2d") ||
    new CanvasRenderingContext2D();
  contextRuler =
    (<HTMLCanvasElement>canvasRuler).getContext("2d") ||
    new CanvasRenderingContext2D();
  contextAnimation =
    (<HTMLCanvasElement>canvasAnimation).getContext("2d") ||
    new CanvasRenderingContext2D();
  contextAnimationDrawing =
    (<HTMLCanvasElement>canvasAnimationDrawing).getContext("2d") ||
    new CanvasRenderingContext2D();
} catch (e) {
  // casting error, error message
}

// let contextDraft: CanvasRenderingContext2D;
// let contextIndicator: CanvasRenderingContext2D;
// let contextRuler: CanvasRenderingContext2D;
// let contextAnimation: CanvasRenderingContext2D;
// let contextAnimationDrawing: CanvasRenderingContext2D;

// if (
//   canvasReal instanceof HTMLCanvasElement && canvasReal.getContext("2d") instanceof CanvasRenderingContext2D
//   // canvasReal instanceof HTMLCanvasElement
//   // canvasDraft instanceof HTMLCanvasElement &&
//   // canvasIndicator instanceof HTMLCanvasElement &&
//   // canvasRuler instanceof HTMLCanvasElement &&
//   // canvasAnimation instanceof HTMLCanvasElement &&
//   // canvasAnimationDrawing instanceof HTMLCanvasElement

// ) {
//   contextReal = canvasReal.getContext("2d");
//   // contextDraft = canvasDraft.getContext("2d");
//   // contextIndicator = canvasIndicator.getContext("2d");
//   // contextRuler = canvasRuler.getContext("2d");
//   // contextAnimation = canvasAnimation.getContext("2d");
//   // contextAnimationDrawing = canvasAnimationDrawing.getContext("2d");
// }

// let currentFunction:(contextReal: CanvasRenderingContext2D, contextDraft: CanvasRenderingContext2D )=> void;
let currentFunction: PaintFunction;
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
  let vw = $(".structure").width();
  let vh = $(".structure").height();
  if (typeof vw == "number" && typeof vh == "number") {
    canvas.width = vw;
    canvas.height = vh;
  } else {
    throw new Error("Width and Height are not number");
  }
});

class PaintFunction {
  constructor() {}
  onMouseDown() {}
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}
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
