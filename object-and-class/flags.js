/**
 * * OBJECT'S PROPERTY FLAGS AND DESCRIPTIONS
 * 📚 https://javascript.info/property-descriptors
 * writable, enumerable and configurable
 */


// * WRITABLE
const myObject = {
  regularProp: 123,
}

Object.defineProperty(myObject, 'writableProp', {
  value: 'Miko', // the same like in line 6
  writable: false,
})
myObject.writableProp = 'newMiko!';
// console.log('myObject', myObject);
// console.log(Object.getOwnPropertyDescriptor(myObject, 'writableProp') );
// console.log(myObject.writableProp ); // with writable: false, -> still Miko!

// * ENUMERABLE
const myObjectA = {
  regularPropA: 123,
}
Object.defineProperty(myObjectA, 'enumerableProp', {
  value: 'enumerable!',
  enumerable: true,
  // configurable: false,
});
// console.log(myObjectA);
for (const key in myObjectA) {
  // console.log(key);
}

// * CONFIGURABLE
const myObjectB = {
  deletablePropA: 123,
  deletablePropB: 456,
  configurableProp: 1000
}
Object.defineProperty(myObjectB, 'configurableProp', {
  configurable: false,
});
delete myObjectB.deletablePropB;
delete myObjectB.configurableProp; // not working!
// console.log(myObjectB);


// * DEFINEPROPERTIES
let obj = {prop1: undefined, prop2: undefined}
Object.defineProperties(obj, {
  prop1: { value: 'abc', writable: false },
  prop2: { value: 'def', writable: false },
})
// console.log(obj);
