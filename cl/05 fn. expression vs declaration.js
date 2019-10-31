/*
* Create two functions, one as a declaration, one as an expression.
* Focus on the place of the invoking each function.
*/

// *** function declaration ***

sayHi(); // 1A hoisting!

function sayHi(){
  console.log('Hi there from function sayHi()!');
}

sayHi(); // 1B


// *** function expression/definition.... BETTER! ***

// sayHello(); // 2A "Uncaught TypeError: sayHello is not a function"

const sayHello = function(){
  console.log('Hello from const sayHello()!');
}

sayHello(); // 2B

/*
* JavaScript interpreter moves function declaration, sayHi(), to the beggining of the code (hoisting), so can be invoked from everywhere.
* Function definition (asignment to a variable) can be invoked after declaring it (just like any other variable).

* benefits of function expression: https://medium.com/@mandeep1012/function-declarations-vs-function-expressions-b43646042052
*/

