let arrOfFx: number[] = [];
let animationStatus: boolean = false;
let animationStylePicker = {
  shades: ["#C70039", "#FF5733", "#FFC305"],
  r: [1.5, 3, 5],
  ballCounter: 0,
  maxCounter: 5000000
};

// Initiate ball and draw it on certain location
class Ball {
  x: number;
  y: number;
  r: number;
  color: string;

  constructor(coord: number[], radius: number, color: string) {
    this.x = coord[0];
    this.y = coord[1];
    this.r = radius;
    this.color = color;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();
  }
}

// Drawing desirable text into the destinated canvas
function centerText(
  centxt: string,
  context: CanvasRenderingContext2D,
  canvas: HTMLCanvasElement
) {
  context.fillStyle = "rgba(254, 254, 254, 1)";
  context.font = "300px serif";
  context.textAlign = "center";
  context.fillText(centxt, canvas.width / 2, canvas.height / 2);
}


// Return boolean of the pointing pixel is transparant or not
function checkPix(context: CanvasRenderingContext2D, _x: number, _y: number): boolean {
    let pixelData = context.getImageData(_x, _y, 1, 1).data;
    return ((pixelData[0] == 0) && (pixelData[1] == 0) && (pixelData[2] == 0) && (pixelData[3] == 0));
}

// Check if the ball counter has reached to its max, if not, draw rand ball in spot with trans pixel
function looping() {
  if (animationStylePicker.ballCounter < animationStylePicker.maxCounter) {
    // Create random coordinates
    let canvasWidth = $("#animation").width();
    let canvasHeight = $("#animation").height();
    if (typeof canvasWidth === "number" && typeof canvasHeight === "number" ){
        let coordinate = [randInclusive(0, canvasWidth), randInclusive(0, canvasHeight)];


        if (
          checkPix(contextAnimationDrawing, coordinate[0], coordinate[1]) &&
          checkPix(contextAnimation, coordinate[0], coordinate[1])
        ) {
          let ball = new Ball(
            coordinate,
            animationStylePicker.r[randInclusive(0, animationStylePicker.r.length)],
            animationStylePicker.shades[
              randInclusive(0, animationStylePicker.shades.length)
            ]
          );
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
      cleanInterval(arrOfFx);
      animationStatus = false;
    } else {
      $("#animation, #animation-drawing").show();
      parallelFx(arrOfFx, looping, 1000);
      animationStatus = true;
    }
  });
});
