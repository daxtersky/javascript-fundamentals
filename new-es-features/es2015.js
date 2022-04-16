/**
 * * ES2015
 * 📚 https://davidwalsh.name/array-destructuring & https://davidwalsh.name/es6-features
 */

// * DESTRUCTURING
const destructuredObject = { prop1: 'one', prop2: 'two' };
const { prop1, prop2 } = destructuredObject;
// console.log('prop1', prop1);
// console.log('prop2', prop2);

const destructuredArray = ['first item', 'second item'];
const [item0, item1] = destructuredArray;
// console.log('item0', item0);
// console.log('item1', item1);

// * REST AND SPREAD
const user = { id: 3, name: 'John Doe' }
const userWithEmail = { ...user, email: 'email@mail.com' };
// console.log(user);
// console.log(userWithEmail);
const email = { email: 'email@mail.com' };
const mergedUserWithEmail = {...user, ...email };
// console.log(mergedUserWithEmail);

// * setting Object[key] dynamically
const randomKeyValue = Math.random() > 0.5 ? 'randomKeyOne' : 'randomKeyTwo';
const obj = {
    key1: 'One',
    key2: 'Two',
    [randomKeyValue]: 'Three'
};
// console.log('obj', obj);

// * FINDINDEX IN ARRAY
const arr = [1, 3, 56, 78];
// console.log(arr.findIndex(a => a > 75));

// * TEMPLATE LITERALS
// console.log('Template literals...', `are cool!`);

// * DEFAULT ARGUMENTS
// const functionWithArgs = (a = '', b = '', c = 'Warsaw') => console.log(`${a} moved from ${b} ${c} for good!?`);
// functionWithArgs('Miko', 'Groningen');
