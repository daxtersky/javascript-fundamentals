/* ********* 1 ********* */
const postcode = '02-381';
console.log(postcode, postcode.indexOf('-') !== -1);

/* ********* 2 ********* */
const mail1 = "mikisafa@gmail.com";
const mail2 = "daxtersafsa@gmail.com";
const mail3 = "mikolaygmail.com"
console.log(mail1.indexOf("@") !== -1);
console.log(mail2.indexOf("@") !== -1);
console.log(mail3.indexOf("@") !== -1); // -1 czyli false

/* ********* 3 ********* */

getNumber(2, [33, 54, 2, 1, 4, 100]);
getNumber(5, [33, 54, 2, 1, 4, 100]);

function getNumber(number, array) {
  if (array.indexOf(number) !== -1) {
    console.log(`There is number ${number} in array: ${array}.`);
  } else {
    console.log(`No number: ${number} in array: ${array}.`);
  }
}

/* ********* 4 ********* */
/* Sum up all repeating numbers in the array */

addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]);
addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]);
addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]);
addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]);

function addTheSameNumbers(number, array) {
  let sum = 0;
  if (array.indexOf(number) !== 1) {
    console.log(`There's no ${number} in array`);
    return null;
  } else {
    array.forEach(i => {
      if (i === number) {
        sum += i;
      }
    });
    console.log(`${number} is in array and it's sum is ${sum}`);
    return sum;
  }
}
