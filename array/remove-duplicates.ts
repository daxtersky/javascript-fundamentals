// ! https://dev.to/hi_iam_chris/how-to-remove-duplicates-from-javascript-array-5bb7

// * 3 WAYS TO REMOVE DUPLICATES FROM ARRAY

const numbers = [1, 2, 3, 1, 2, 3, 1, 2, 3];

// INDEXOF
const uniqueNumbers1 = [];
for (const number of numbers) {
  if (uniqueNumbers1.indexOf(number) < 0) {
    uniqueNumbers1.push(number);
  }
}
console.log(uniqueNumbers1);

// SET
const uniqueNumbers2 = Array.from(new Set(numbers));
console.log(uniqueNumbers2);

// SORT & ARRAY
const uniqueNumbers3 = numbers.sort((a, b) => a - b).filter((number, index, array) => number !== array[index + 1]);
console.log(uniqueNumbers3);