namespace Utility {
  // Run function in "parallel" and clear them out when user determines the operation
  export function parallelFx(
    arrOfFx: number[],
    callback: any,
    howManyTimes: number
  ): void {
    for (let i = 0; i < howManyTimes; i++) {
      arrOfFx.push(setInterval(callback, 100));
    }
  }

  export function cleanInterval(arr: number[]): void {
    arr.forEach((indexId: number) => clearInterval(indexId));
    arr = [];
  }

  // Generate random number with min and max, where maximum is inclusive
  export function randInclusive(min: number, max: number): number {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }
}
