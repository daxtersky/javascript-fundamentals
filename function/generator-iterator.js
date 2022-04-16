/**
 * * GENERATORS
 * 📚 https://dev.to/rahxuls/what-are-generators-in-javascript-5fd8
 * 📚 https://dev.to/lydiahallie/javascript-visualized-generators-and-iterators-e36
 * 📚 https://jfet97.github.io/JavaScript-Iterators-and-Generators/
 * 📚 https://jcubic.pl/2018/07/generatory-i-iteratory-wyzszego-poziomu.html
 */

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
