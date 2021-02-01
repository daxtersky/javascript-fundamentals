// * FUNCTION EXPRESSION (ANONYMOUS FUNCTION ASSIGNED TO VARIABLE)
const expressionFunction = function () {
  console.log('this is expression function');
}
expressionFunction();

// * FUNCTION DECLARATION (FUNCTION DECLARED BY function, JUST LIKE var BY VARIABLE)
declarationFunction(); // * hoisting possible! This is the key difference
function declarationFunction() {
  console.log('this is declaration function');
}
declarationFunction();

// ! https://javascriptweblog.wordpress.com/2010/07/06/function-declarations-vs-function-expressions/
// function foo1() {
//   function bar1() {
//     return 3;
//   }
//   return bar1();
//   function bar1() {
//     return 8;
//   }
// }
// console.log(foo1());

// function foo2(){
//   var bar2 = function() {
//       return 3;
//   };
//   return bar2();
//   var bar2 = function() {
//       return 8;
//   };
// }
// console.log(foo2());

// console.log(foo3());
// function foo3(){
//     var bar3 = function() {
//         return 3;
//     };
//     return bar3();
//     var bar3 = function() {
//         return 8;
//     };
// }

// function foo(){
//   return bar();
//   var bar = function() {
//       return 3;
//   };
//   var bar = function() {
//       return 8;
//   };
// }
// console.log(foo());