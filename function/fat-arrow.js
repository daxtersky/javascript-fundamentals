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
// console.log(foo());

// * 'THIS' IN FAT ARROW

const javascript = {
  name: 'JavaScript.',
  description: 'My first programming language!',
  liking: 'I love it :)',
  frameworks: ['React', 'Angular', 'Vue.Js'],
  displayDetails: function() {
    console.log(this.name, this.description);
  },
  displayLiking: () => { // UNDEFINED // arrow functions NOT good as methods // global this
    console.log(this.name, this.liking);
  },
  showFrameworks: function func() {
    this.frameworks.forEach(framework => {
    // this.frameworks.forEach(function(framework) { // UNDEFINED
      console.log(`${this.name}: ${framework}`);
    })
  }
}
// javascript.displayDetails();
// javascript.displayLiking();
// javascript.showFrameworks();

// ! https://javascript.info/object-methods

const user = {
  name: 'Miko',
  exprFn() { // shorthand of function expression // exprFn: function() {
    console.log(this.name);
    const arrowFn2 = () => console.log(this.name + ' (arrowFn2)!');
    arrowFn2();
  },
  arrowFn: () => console.log(this.name) // undefined
};
user.exprFn();
// user.arrowFn();
