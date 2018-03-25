"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Run function in "parallel" and clear them out when user determines the operation
function parallelFx(arrOfFx, callback, howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        arrOfFx.push(setInterval(callback, 100));
    }
}
exports.parallelFx = parallelFx;
function cleanInterval(arr) {
    arr.forEach((indexId) => clearInterval(indexId));
    arr = [];
}
exports.cleanInterval = cleanInterval;
// Generate random number with min and max, where maximum is inclusive
function randInclusive(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}
exports.randInclusive = randInclusive;
// Return boolean of the pointing pixel is transparant or not
function checkPix(context, _x, _y) {
    let pixelData = context.getImageData(_x, _y, 1, 1).data;
    return (pixelData[0] == 0 &&
        pixelData[1] == 0 &&
        pixelData[2] == 0 &&
        pixelData[3] == 0);
}
exports.checkPix = checkPix;
