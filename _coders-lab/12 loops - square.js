/*
* Show square in console.log!
*/

function showSquare(n) {
  const star = '*';
  for (let i = 0; i < n; i++) {
    let lineOfStars = '';
    for (let j = 0; j < n; j++) {
      lineOfStars += star;
    }    
    console.log(lineOfStars);
  }
}

showSquare(5);