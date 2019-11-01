/*
* Show triangle in console.log!
*/

function showTriangle(n) {
  const star = '*';
  let lineOfStars = '';
  for (let i = 0; i < n; i++) {
    lineOfStars += star;
    console.log(lineOfStars);
  }
}

showTriangle(5);