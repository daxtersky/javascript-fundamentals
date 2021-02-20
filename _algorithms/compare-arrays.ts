// * compare two arrays

// ! https://www.30secondsofcode.org/blog/s/javascript-array-comparison

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [1, 2, 4];

const compare = (arrayA: number[], arrayB: number[]): boolean => arrayA.length === arrayB.length
  && arrayA.every((numA: number, indA: number) => numA === arrayB[indA]);

console.log( compare(arr1, arr2) );
console.log( compare(arr1, arr3) );