// ! https://www.freecodecamp.org/news/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e/

// * PROMISE FINALLY
const myPromise = new Promise((resolve, reject) => {
  // resolve('Good result :)');
  // reject('Bad outcome :(');
})
  .then(val => console.log(val))
  .catch(val => console.log(val))
  .finally(() => console.log("Whatever the outcome, 'finally' is always executed"));

  // * ASYNC ITERATION
  const promises = [
    new Promise(resolve => resolve(1)),
    new Promise(resolve => resolve(2)),
    new Promise(resolve => resolve(3)),
  ];
  async function getPromises1() {
    for (const promiseItem of promises) {
      console.log(promiseItem);
    }
  }
  async function getPromises2() { // for await of
    for await (const promiseItem of promises) {
      console.log(promiseItem);
    }
  }
  getPromises1();
  getPromises2();