// * TYPES

// https://javascript.info/types
// https://medium.com/intrinsic/javascript-symbols-but-why-6b02768f4a5c

// primitive
let symbolVar: Symbol;
// objects, reference (don't have real value, only memory reference),

// falsy
null
undefined
''
NaN
// truthy

let a = 2;
let b = a;
a = 3;
console.log(a); // 3
console.log(b); // 2