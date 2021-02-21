// * Symbols

// primitive type for unique identifiers
// used for debugging

// ! https://kursjs.pl/kurs/obiekty/symbole.php
// ! https://javascript.info/symbol

const sym: Symbol  = Symbol('symbol is a unique value');
const sym2: Symbol = Symbol('symbol is a unique value');

console.log(typeof sym);
console.log(sym == sym2);
console.log(sym === sym2);
