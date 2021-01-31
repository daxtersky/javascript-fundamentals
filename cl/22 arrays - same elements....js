/* Stwórz tablicę z losowymi liczbami (10 liczb) z przedziału 1-10.
* Wylosuj liczby za pomocą Math.random(). Następnie wypisz ile jest
* liczb w tej tablicy, które się powtarzają.
* Wynik w consoli: 3 // powtarzają się 4, 8 i 1
* var arr1 = [4, 8, 1, 2, 1, 4, 5, 8, 1, 3 ];
*/

let randomArr = [];
let sameElements = 0;
fillRandomArr();
countSameElements();
function fillRandomArr() {
  for (let i = 0; i < 10; i++) {
    randomArr.push(Math.round(Math.random() * 10));
  }
  return randomArr;
}
function countSameElements() {
  for (let i=0;i<randomArr.length;i++) {
    for (let j=0;j<randomArr.length;j++) {
      if (i !== j) {
        if (randomArr[i] === randomArr[j]) {
          sameElements += 0.5;
          console.log(randomArr[i] + ' = ' + randomArr[j]);
          break;
        }
      }
    } 
  }
  return sameElements;
}

console.log('randomArr', randomArr);
console.log('sameElements', sameElements);


/* WORKS BUT NOT ENTIRELY :( */

///////////////////////////////////////////////////////// WORKING VERSION
var tab2 = [];
Math.random
for (var i=0;i<10;i++) {
    var nr = Math.floor(Math.random() *10) + 1;
    tab2.push(nr);
}
console.tab(tab2)

tab2 = [ 4, 8, 1, 2, 1, 4, 5, 8, 1, 3]
var dup = [];
    for (var i=0; i<tab.length; i++) {
        var curr = tab2[i];
        for (var j=i+1; j<tab2.length; j++) {
            if (tab2[j] === tab2[i]) {
                if (dup.push(tab2[i]) == -1) {
                    dup.push(tab2[i])
                }
            }
        }
    }
    console.log(dup);