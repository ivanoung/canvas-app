// Getting the target
export let saveImage = (canvas: HTMLCanvasElement, imgArray: HTMLImageElement[]) => {
  canvas.toBlob(blob => {
    let newImg = document.createElement("img"),
      url = URL.createObjectURL(blob);
    newImg.src = url;
    newImg.onload = () => {};
    imgArray.push(newImg);
  });
};

export function drawSavedImage(
  img: HTMLImageElement,
  canvas: HTMLCanvasElement
) {
  contextReal.clearRect(0, 0, canvas.width, canvas.height);
  contextReal.drawImage(img, 0, 0);
}
