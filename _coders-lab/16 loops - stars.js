/*
* With a variable (n = 5) write code responsible for drawing this beautiful picture below:

  *   *
*   *   *
  *   *  
*   *   *
  *   *   
*/

const n = 5;
function countStars(n) {
  for (let i = 0; i < n; i++) {
    let stars =  '';
    for (let j = 0; j < n; j++) {
      if ((i+j)%2 === 0) {
        stars += '  ';
      } else {
        stars += '*';
      }
    }
    console.log(i, stars);
  }
}
countStars(n);