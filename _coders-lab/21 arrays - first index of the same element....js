/* W pliku script.js stwórz tablicę z 10 dowolnymi liczbami (niech kilka będzie takich samych)
* oraz zmienną firstIndex. W pętli for sprawdź, która z liczb powtarza się jako pierwsza,
* przypisz ją do zmiennej firstIndex i wypisz w konsoli jej indeks. Przykładowa tablica:
* var arrWithNumbers = [2,4,5,2,3,5,1,2,4]; W tej tablicy jako pierwsza powtarza się liczba 2,
* więc zmienna firstIndex powinna mieć wartość 0, ponieważ jest to pierwsza liczba w tablicy,
* która ma gdzieś swojego sobowtóra. Przetestuj Twój skrypt z różnymi wartościami w tablicy.
* Podpowiedź: pamiętaj o odpowiednim przerwaniu pętli.
*/
// const arr4 = [5, 1, 6, 13, 9, 6, 19, 43];
const arr4 = [2,4,5,2,3,5,1,2,4];
// const arr4 = [1,2,3,4,5,6,7,8,9];
findSameNum();
function findSameNum() {
  let firstIndex = 0;
  for (let i = 0; i < arr4.length; i++) {
    for (let j = 0; j < arr4.length; j++) {
      if (arr4[i] === arr4[j]) {
        firstIndex = i;
        console.log(arr4[i], arr4[j], 'firstIndex', firstIndex);
        break;
      }
      if (firstIndex !== 0) {
        break;
      }
    }
    if (firstIndex !== 0) {
      break;
    }
  }
  console.log('firstIndex', firstIndex);
}
// DOESNT WORK!!!!!