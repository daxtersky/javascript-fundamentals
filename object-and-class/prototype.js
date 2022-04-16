/**
 * 📚 PROTOTYPE ★ https://javascript.info/prototype-inheritance
 * __proto__ is a historical getter and setter for [[Prototype]] of the object
 */

// 1 way of prototype inheritance
const animalA = {
  eats: true,
}
const rabbit = {
  jumps: true,
}
rabbit.__proto__ = animalA;
console.log(rabbit );
console.log(rabbit.eats );

const animalB = {
  eats: true,
  walk() {
    console.log('Animal walks');
  }
}
const dolphin = {
  swims: true,
  __proto__: animalB,
}
dolphin.walk();
const longBeakedDolphin = {
  likesCold: true,
  __proto__: dolphin,
}
longBeakedDolphin.walk();
longBeakedDolphin.walk = function() {
  console.log('longBeakedDolphin swims not walks!');
}
longBeakedDolphin.walk();

console.log('hasOwnProperty... eats?', longBeakedDolphin.hasOwnProperty('eats'));
console.log('hasOwnProperty... swims?', longBeakedDolphin.hasOwnProperty('swims'));
console.log('hasOwnProperty... likesCold?', longBeakedDolphin.hasOwnProperty('likesCold'));

/**
 * 📚 https://dev.to/anuradha9712/prototype-and-prototypal-inheritance-in-javascript-4j6n
 * 📚 https://dev.to/mvganeshkumar06/prototypes-in-javascript-40md
 */


const arr = ['a', 'b'];
// console.log(typeof arr, '/', arr);
// console.log(typeof arr.__proto__, '/', arr.__proto__);
// console.log(typeof arr.__proto__.__proto__, '/', arr.__proto__.__proto__);
// console.log(typeof arr.__proto__.__proto__.__proto__, '/', arr.__proto__.__proto__.__proto__);

function func() {
  console.log('function');
}
// console.log(typeof func, '/', func);
// console.log(typeof func.__proto__, '/', func.__proto__);
// console.log(typeof func.__proto__.__proto__, '/', func.__proto__.__proto__);
// console.log(typeof func.__proto__.__proto__.__proto__, '/', func.__proto__.__proto__.__proto__);

// http://slides.com/agatamalec-1/znajdz-swoje-korzenie-dziedziczenie-w-javascript-2#/17