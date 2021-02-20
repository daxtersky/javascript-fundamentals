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

showSpecialSquare(3);

function showSpecialSquare(n) {
  var star = '*';
  for (let i = 1; i <= n; i++) {
    var specialSquare = '';
    for (let j = 0; j < n; j++) {
      if (j <= n) {
        specialSquare += star;
          // console.log(i, n)
        }
        // if () {}
        // console.log(i, n)
      }
      // console.log(i)
      console.log(specialSquare)
    }
}