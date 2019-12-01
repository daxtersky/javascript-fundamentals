/*
* Count the sum of all numbers in given interval from X to Y.
* Example for x = 5, y = 10 sum is 5+6+7+8+9+10=45
*/

const x = 5;
const y = 10;
function countSumBetweenNumber(x,y) {
  let sum = 0;
  for (x; x <= y; x++) {
    console.log(x, y)
    sum += x;
  }
  console.log('sum', sum)
}

countSumBetweenNumber(x,y);