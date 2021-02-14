// * TYPES

// ! https://javascript.info/types
// ! https://medium.com/intrinsic/javascript-symbols-but-why-6b02768f4a5c
// ! https://kursjs.pl/kurs/super-podstawy/typy-danych.php

// * PRIMITIVE TYPES, they contain a value
  // number,
  // string,
  // boolean,
  // undefined,
  // null,
  // bigint,
  // symbol

let x; // undefined
console.log(x);

// * OBJECTS, they don't have real value, only memory reference
const oldObject = { prop: 'Initial value' };
const newObject = oldObject;
oldObject.prop = 'Changed value!';
console.log(newObject);

// * literał vs konstuktor
const literal = 'literal';
const konstuktor = new String('konstuktor'); // Number Boolean Array - constructors of primitive types
console.log(typeof literal); // object!
console.log(typeof konstuktor); // object!
