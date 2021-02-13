// ! https://css-tricks.com/understanding-async-await/
const buildSuccessfullRelationship = new Promise((resolve, reject) => {
  console.log("I love you, let's be together");
  resolve();
  // reject();
})
  .then(() => console.log('I love you too! :)'))
  .catch(() => console.log('No, look for another one, not me... :('))
  .finally(() => console.log("...if you don't ask you will never now."));

// ! https://dev.to/qmaximillian/snow-days-and-javascript-promises-48id
function willItSnow() {
  // return false;
  return Math.random() < 0.5;
}

console.log('Will it snow tomorrow?....');
const snowPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    willItSnow()
      ? resolve('Snow is coming!....')
      : reject('No snow, spring is closer....');
  }, 1000);
});

snowPromise
  .then(
    (value) => console.log('.then value:', value), // fulfilled
    // (error) => console.log('.then error:', error) // rejected
  )
  .catch((error) => console.log('.catch error', error));


