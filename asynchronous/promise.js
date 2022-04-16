/**
 * * PROMISE
 */

// 📚 https://css-tricks.com/understanding-async-await/

// const buildSuccessfullRelationship = new Promise((resolve, reject) => {
//   console.log("I love you, let's be together");
//   // resolve();
//   reject();
// })
//   .then(() => console.log('I love you too! :)'))
//   .catch(() => console.log('No, look for another one, not me... :('))
//   .finally(() => console.log("...if you don't ask you will never now."));

// 📚 https://dev.to/qmaximillian/snow-days-and-javascript-promises-48id

// function willItSnow() {
//   // return false;
//   return Math.random() < 0.5;
// }

// console.log('Will it snow tomorrow?....');
// const snowPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     willItSnow()
//       ? resolve('Snow is coming!....')
//       : reject('No snow, spring is closer....');
//   }, 1000);
// });

// snowPromise
//   .then(
//     (value) => console.log('then value!', value), // fulfilled
//     // (error) => console.log('then error!', error) // rejected
//   )
//   .catch((error) => console.log('catch error!', error));

// 📚 https://javascript.info/promise-chaining

const fetchedObject = { name: 'Miko', age: 38 };

loadFirstPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('First result', fetchedObject);
     resolve(fetchedObject);
      // reject('no data');
    }, 1000);
  });
}
loadSecondPromise = (returnedObject) => {
  returnedObject.nationality = 'Polish';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Second result!', returnedObject);
      resolve(returnedObject);
    }, 1000);
  });
}
loadThirdPromise = (returnedObject) => {
  returnedObject.profession = 'Software Developer';
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Third result!', returnedObject);
      resolve(returnedObject);
    }, 1000);
  });
}
loadFirstPromise()
  .then((object) => loadSecondPromise(object))
  .then((object) => loadThirdPromise(object))
  .catch(err => console.log('err!', err))


