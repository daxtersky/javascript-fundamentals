// W pliku script.js napisz program rysujący na podstawie wartości zmiennej n następujący schemat (tutaj dla n = 5):

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
  var star = '*';
  var specialSquare = '';
  for (let i = 1; i <= n; i++) {
    specialSquare += star;
    // if (i < n) {
      // console.log(specialSquare, i)
    // } else {
      console.log(specialSquare);
    // }
    if (i === n) {
      console.log(specialSquare);
      for (let j = 1; j <= n; j++) {
        var secondPart = specialSquare.substring(0, specialSquare.length - j);
        console.log(secondPart);
      }
    }
  }
}