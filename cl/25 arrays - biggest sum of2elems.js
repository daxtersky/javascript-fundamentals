// Napisz funkcję bigestSumOfTwoElements(array), która przyjmuje tablicę z liczbami i zwraca sumę
// dwóch największych elementów z tej tablicy. Dla uproszczenia możemy założyć, że przekazana
// tablica zawiera wyłącznie liczby.
// Jeżeli tablica zawiera tylko jeden element, funkcja powinna zwrócić wartość tego elementu.
// Jeżeli tablica zawiera zero elementów, funkcja powinna zwrócić wartość logicznąfalse.
//
// Przykład:
// bigestSumOfTwoElements([1,2,3,4]) // => 7
// bigestSumOfTwoElements([]) // => false
// bigestSumOfTwoElements([76]) // => 76
// bigestSumOfTwoElements([23,45,17,12]) // => 68

function bigestSumOfTwoElements(param) {
  if (Array.isArray(param)) {
    if (param.length === 0) {
      return false;
    } else if (param.length === 1) {
      return param[0];
    } else {
      let bigNum1 = 0;
      let bigNum2 = 0;
      for (let i = 0; i < param.length; i++) {
        if (param[i] > bigNum1) {
          bigNum1 = param[i];
        }
      }
      for (let i = 0; i < param.length; i++) {
        if (param[i] > bigNum2 && param[i] < bigNum1) {
          bigNum2 = param[i];
        }
      }
      return bigNum1 + bigNum2;
    }
  }
}
console.log(bigestSumOfTwoElements([23, 45, 17, 12])); // 68
