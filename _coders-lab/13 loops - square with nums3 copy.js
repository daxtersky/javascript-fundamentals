/*
* Write program draginwg rysujący na podstawie wartości zmiennej n następujący schemat (tutaj dla n = 5):
* W pliku script.js napisz program rysujący na podstawie wartości zmiennej n następujący schemat (tutaj dla n = 5):
*/

// * 2 3 4 5
// * * 3 4 5
// * * * 4 5
// * * * * 5
// * * * * *
// * * * * *
// * * * * 5
// * * * 4 5
// * * 3 4 5
// * 2 3 4 5

showSpecialSquare(5);

function showSpecialSquare(n) {
  let star = '';
  let result = null;
  for (let i = 1; i <= n; i++) {
    let num = '';
    star += '*';
    for (let j = 2; j <= n; j++) {
      if (i < j) {
        num += j;
      }
      result = star + num;
    }
    console.log(result);
  }
  for (let g = n; g > 1; g--) { // g = 5,4,3,2,2
    // console.log('result', result);
    for (let h = n; h > 1; h--) { // h = 5,4,3,2,2
      if (g !== h) {
        result = result.substring(0, result.length - 1); // .substring(0, result.length - 1);
        result += h;
        console.log(result);
        // result.join(h);
        // num2 = '*';
      }
    }
    // console.log('', result);
    result = result.substring(0, result.length - 1);
  }

}