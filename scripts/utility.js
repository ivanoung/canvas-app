"use strict";
// Run function in "parallel" and clear them out when user determines the operation
function parallelFx(arrOfFx, callback, howManyTimes) {
    for (let i = 0; i < howManyTimes; i++) {
        arrOfFx.push(setInterval(callback, 100));
    }
}
function cleanInterval(arr) {
    arr.forEach((indexId) => clearInterval(indexId));
    arr = [];
}
// Generate random number with min and max, where maximum is inclusive
function randInclusive(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}

