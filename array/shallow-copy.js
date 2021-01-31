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

