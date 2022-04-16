/**
 * * THIS in CLASS 
 * 📚 https://javascript.info/bind
 * 📚 https://javascript.info/prototype-inheritance 
 * this is always the object before the dot
 * 📚 https://dev.to/anuradha9712/call-apply-bind-methods-in-javascript-4pfn
 */

// * 'THIS'
// 'THIS' in fat arrow function => look for 'fat-arrow' file

const javascript = {
  name: 'JavaScript',
  description: 'My first programming language!',
  liking: 'I love it :)',
  displayDetails(optionalParam1, optionalParam2) { // the same as... displayDetails: function(optionalParam1, optionalParam2) {
    console.log(this.name, this.description, optionalParam1, optionalParam2);
  },
}
// javascript.displayDetails('opt1', 'opt2');


//  * CALL() allows us to borrow functions and set THIS on function invocation // expects list of arguments
function displayNameDescription(optionalParamA = '', optionalParamB = '') {
  console.log(this.name, this.description, optionalParamA, optionalParamB);
}
const python = {
  name: 'Python',
  description: 'Interesting backend language with cool syntax.',
}
// javascript.displayDetails.call(python, '(optional param A', 'optional param B)');
// displayNameDescription.call(python);
// displayNameDescription.call(python, 'optionalParam A', 'optionalParam B'); // list of arguments
// displayNameDescription.call(python, ...optionalParams); // list of arguments

// * APPLY() optional parameters in array
const cplusplus = {
  name: 'C++',
  description: 'Classic and little bit harsh backend language.',
}
// javascript.displayDetails.apply(cplusplus, ['(optional param A', 'optional param B)']);
// displayNameDescription.apply(cplusplus);
// displayNameDescription.apply(cplusplus, ['optional param A', 'optional param B']);

// * BIND() gives the copy of the function which can be invoked later...
const typescript = {
  name: 'TypeScript',
  description: 'Even better than Javascript!',
}
const getTypescriptDetails = displayNameDescription.bind(typescript);
// getTypescriptDetails();
// const getTypescriptDetails2 = displayNameDescription.call(typescript); // * ... call() is invoked directly
// getTypescriptDetails2();
