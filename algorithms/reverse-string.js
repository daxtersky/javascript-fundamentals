// * reverse string linked list (lista jednokierunkowa)

// ! https://blog.soltysiak.it/pl/2016/08/10-najpopularniejszych-algorytmicznych-pytan-rekrutacyjnych/

const originalString = ' ab  cd edf ';

const reverse = (string) => [...string.trim()].filter(a=>a !==' ').reverse().toString().replace(/,/g,'');

console.log( reverse(originalString) );