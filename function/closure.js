// ! https://dev.to/anuradha9712/closures-in-javascript-28h7

function outer(){
  const foo = "Closure is when inner function has access to outers function's scope.";
  function inner() {
    console.log(foo);
  }
  inner();
}
outer();

// https://alligator.io/js/closures/
// https://scotch.io/tutorials/understanding-scope-in-javascript#toc-closures