// ! https://dev.to/rahxuls/what-are-generators-in-javascript-5fd8

// GENERATORS
function* generatorFunction() {
  var num = 1;
  while (num <= 3) {
    yield num;
    num ++;
  }
}
var number = generatorFunction();
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());
console.log(number.next());