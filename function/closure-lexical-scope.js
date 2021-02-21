// * CLOSURE

// ! https://dev.to/anuradha9712/closures-in-javascript-28h7
// ! https://javascript.info/closure

function outer(){
  const closureExample = "Closure is when inner function has access to outers function's scope.";
  function inner() {
    const lexicalScopeExample = 'lexical scope';
    console.log(closureExample);
  }
  inner();
  console.log(lexicalScopeExample); // undefined
}
outer();

// https://alligator.io/js/closures/
// https://scotch.io/tutorials/understanding-scope-in-javascript#toc-closures


// * LEXICAL SCOPE
// ! https://scotch.io/tutorials/understanding-scope-in-javascript#toc-lexical-scope

// outer function don't have access to child function's properties

function grandparentFn() {
  const grandparent = 'grandparent';
  function parentFn() {
    const parent = 'parent';
    function childFn() {
      const child = 'child';
      console.log(grandparent);
      console.log(parent);
      console.log(child);
    }
    childFn();
    console.log(child); // undefined
  }
  parentFn();
  console.log(parent); // undefined
}
grandparentFn(); // undefined
