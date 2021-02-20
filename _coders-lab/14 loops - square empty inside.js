/*
* Show square with empty inner part in console.log!
```
  * * * * *
  *       *
  *       *
  *       *
  * * * * *
```
*/

const num = 5;

function drawSquare(num) {
  for (let i = 1; i <= num; i++) {
    let square = '';
    for (let j = 1; j <= num; j++) {
      if (i > 1 && i < num && j > 1 && j < num) {
        square += ' ';
      } else {
        square += '*';
      }
    }
    console.log(square);    
  }
}
drawSquare(num);
