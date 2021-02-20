// Napisz funkcję checkArray przyjmującą jako argument tablicę dwuwymiarową z liczbami całkowitymi.
// Funkcja ma zwrócić nową tablicę, w której kolejnymi elementami będą wartości boolean true lub false,
// zależne od tego, czy każdy element tablicy drugiego wymiaru jest parzysty.
var arr = [ [11, 12], [42, 2], [-4, -120], [0, 0], [1, 34] ];
// output
// var arrayCheck = [
// false, // bo 11
// true,
// true,
// true,
// false, // bo 1
// ];

function isEven(element) {
  return element % 2 == 0;
}

function allEven(arr) {
  return arr.every( function(element) {
      return isEven(element)
  });
}

function checkArray(arr) {
  var result = [];
  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
    result.push(allEven(arr[i]));
  }
  console.log(result);
  return result;
}
checkArray(arr)