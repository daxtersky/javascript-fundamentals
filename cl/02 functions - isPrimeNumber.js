/*
* Write function isPrimeNumber(n), which "n" as an argument.
* Function should return true or false,
* depending on if "n" is a prime number or not.
* The prime number is a number divided only  by one or itself.
* Example:
*/
const randomNumber = Math.round(Math.random() * 100);

function isPrimeNumber(number) {
  if (number === 1) {
    return true;
  } else {
    let dividers = [];
    for (let divider = number; divider > 1; divider--) {
      if (number % divider === 0) {
        dividers.push(divider);
      }
    }
    dividers = [...dividers, 1];
    console.log('\'N\' dividers:', dividers)
    console.log('Number', number, dividers.length > 2 ? 'is NOT prime!' : 'is PRIME');
    return dividers.length > 2 ? false : true;
  }
}
isPrimeNumber(randomNumber);
