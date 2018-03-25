import * as imgult from "./img-utility";
import * as canvases from "/Google Drive/3. WIP Projects/05. Accelerator Fulltime Cohort/dos-paint/scripts/canvas";
// Initiating image storage array
const storeImg: HTMLImageElement[] = [];
let map: {};

// Save first blank image from canvas
$(document).ready(() => {
  imgult.saveImage(canvases.canvasReal, storeImg);
});

// Ctrl + z for reverting drawing 1 step

$(window).on("keydown", e => {
  let keycd = e.keyCode;
  if (typeof keycd == "number") {
    map[keycd] = e.type == "keydown";
    if (map[17] && map[90] && storeImg.length > 0) {
      imgult.drawSavedImage(storeImg[storeImg.length - 2], canvases.canvasReal);
      storeImg.pop();
      console.log("after changing the image array");
      console.log(storeImg);
      map = {};
      return false;
    }
  }
});

// Click on save button and get the current image from real canvas
$("#save").click(ev => {
  let saveTp = $("#img-option").val();
  $("#save").attr("href", canvases.canvasReal.toDataURL(`image/${saveTp}`));
  $("#save").attr("download", `mypainting.${saveTp}`);
});
