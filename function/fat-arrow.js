// * FAT ARROW FUNCTION

// can't be used as constructors, used with 'new', call the mwith 'super'
// can't be used as methods
// don't have prototype
// shorthand of function expression

// ! http://codekirei.com/posts/currying-with-arrow-functions/
const addOne = (num) => {
  return num + 1;
}
const addTwo = (num) => num + 2;

// ! https://github.com/airbnb/javascript#naming--self-this
function foo() {
  return () => {
    console.log('self', this);
  }
}
console.log(foo());