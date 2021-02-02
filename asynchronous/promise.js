// ! https://css-tricks.com/understanding-async-await/
const buildSuccessfullRelationship = new Promise((resolve, reject) => {
  console.log("I love you, let's be together");
  resolve();
  // reject();
})
  .then(() => console.log('I love you too! :)'))
  .catch(() => console.log('No, look for another one, not me... :('))
  .finally(() => console.log("...if you don't ask you will never now."));
