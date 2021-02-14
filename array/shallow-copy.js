// * SHALLOW COPY, DEEP COPY

// ! https://www.samanthaming.com/tidbits/50-how-to-deep-clone-an-array/

// * copy primite value and element in array (object)
let originalPrimitive = 16;
let copyPrimitive = originalPrimitive;
// console.log('original', originalPrimitive, 'copy', copyPrimitive);
copyPrimitive = 13333;
// console.log('original', originalPrimitive, 'copy', copyPrimitive);

const originalArr = [16];
const copyArr = originalArr;
// console.log('original', originalArr, 'copy', copyArr);
copyArr[0] = 1335464; // * and original array is getting affected - arrays (objects) are refference types
// console.log('original', originalArr, 'copy', copyArr);

// ! https://dev.to/rahxuls/what-is-shallow-copy-in-javascript-47hg

const array = ['😉', '🙂', '😎'];

const copyArray1 = array; // * mutates!
const copyArray2 = Object.assign(array); // * mutates!
const copyArray3 = [...array]; // * shallow copy with one-level array
const copyArray4 = array.slice();// * shallow copy with one-level array
const copyArray5 = Array.from(array); // * shallow copy with one-level array

array[0] = '😡';
// console.log('copyArray1', copyArray1);
// console.log('copyArray2', copyArray2);
// console.log('copyArray3', copyArray3);
// console.log('copyArray4', copyArray4);
// console.log('copyArray5', copyArray5);

const deepArray = [['😉', '🙂', '😎']];
deepArray[0][0] = '😡'; // * no shallow copy with nested arrays! Lodash for help!

const copyDeepArray1 = [...deepArray];
// console.log(copyDeepArray1);

// ! https://www.samanthaming.com/tidbits/50-how-to-deep-clone-an-array/
// DEEP COPY with lodash
const lodashClonedeep = require('lodash.clonedeep');
// "npm i" and "node shallow-copy.js" in present folder!
let arrayDeep = [[['first level', 'second level', 'third level']]];
const arrayDeepCopy1 = [...arrayDeep]; // * only shallow copy
const arrayDeepCopy2 = lodashClonedeep(arrayDeep); // * deep copy of nested array!
arrayDeep[0][0][2] = 'hacked!';
// console.log(arrayDeepCopy1);
// console.log(arrayDeepCopy2);
