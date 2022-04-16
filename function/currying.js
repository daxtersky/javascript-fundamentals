/**
 * * CURRYING 
 * https://dev.to/anuradha9712/currying-in-javascript-3l1j 
 */

// * FAT ARROW without BIND
const multiplyTwoNumbers = (a, b) => {
  console.log(`${a} * ${b} is ${a * b}`);
}
// multiplyTwoNumbers(2,2);
// multiplyTwoNumbers(3,4);

// * CLASSIC FUNCTIONS with BIND
function multiplyTwoNumbersDeclaration(a, b) {
  console.log(`${a} * ${b} is ${a * b}`);
}
const multiplyTwoNumbersExpression = function(a, b) {
  console.log(`${a} * ${b} is ${a * b}`);
}

const multiplyByTwoExpression = multiplyTwoNumbersDeclaration.bind(this, 2); // !
const multiplyByTwoDeclaration = multiplyTwoNumbersExpression.bind(this, 2); // !
// multiplyByTwoDeclaration(3);
// multiplyByTwoDeclaration(5);
// multiplyByTwoExpression(3);
// multiplyByTwoExpression(5);

// * CLASSIC FUNCTIONS with CLOSURE
function multiplyClosure(a) {
  return function(b) {
    console.log(`${a} * ${b} is ${a * b}`);
  }
}
const multiplyByTwoClosure = multiplyClosure(2);
multiplyByTwoClosure(3);
multiplyByTwoClosure(4);

// * FAT ARROW FUNCTION with CLOSURE
const multiplyClosureFatArrow = b => a => console.log(`${a} * ${b} is ${a * b}`);
multiplyClosureFatArrow(3)(2);