// !

// * FUNCTION EXPRESSION (ANONYMOUS FUNCTION ASSIGNED TO VARIABLE)
const expressionFunction = function() {
  console.log('this is expression function');
}
expressionFunction();

// * FUNCTION DECLARATION
declarationFunction(); // * hoisting possible! This is the key difference
function declarationFunction() {
  console.log('this is declaration function');
}
declarationFunction();