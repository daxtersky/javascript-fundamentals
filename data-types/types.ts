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

// * NON-PRIMITIVE TYPES = OBJECTS, they don't have real value, only memory reference
const oldObject = { prop: 'Initial value' };
const copyObject = oldObject;
oldObject.prop = 'Changed value!';
// console.log(oldObject);

// * literal vs constuktor
const literalString = 'literal';
const literalObject = { literal: 'object' };
const contructorObject = new Object({contructor: 'object'});
const constuktorString = new String('konstuktor'); // Object Number Boolean Array - constructors of all types
console.log(typeof literalString); // string!
console.log(typeof constuktorString); // object!
console.log(literalObject);
console.log(contructorObject);
