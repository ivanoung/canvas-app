import * as imgult from "./img-utility";

// Initiating image storage array
const storeImg: HTMLImageElement[] = [];
let map = {};

// Save first blank image from canvas
$(document).ready(() => {
  imgult.saveImage(canvasReal, storeImg);
});

// Ctrl + z for reverting drawing 1 step

$(window).on("keydown", e => {
  map[e.keyCode] = e.type == "keydown";
  if (map[17] && map[90] && storeImg.length > 0) {
    retriveImage(storeImg[storeImg.length - 2]);
    storeImg.pop();
    console.log("after changing the image array");
    console.log(storeImg);
    map = {};
    return false;
  }
});

// Click on save button and get the current image from real canvas
$("#save").click(ev => {
  let saveTp = $("#img-option").val();
  $("#save").attr("href", canvasReal.toDataURL(`image/${saveTp}`));
  $("#save").attr("download", `mypainting.${saveTp}`);
});
