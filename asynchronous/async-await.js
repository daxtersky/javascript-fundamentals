// * ASYNC AWAIT
const fetch = require('node-fetch'); // * make sure to call "node async-await.js" in this folder!!!!!

// ! https://dev.to/rajatmehra05/what-is-async-await-127p
// 1
async function getInfo() {
  console.log('a');
  await setTimeout(() => {
    console.log('b');
  }, 1);
  console.log('c');
}
// getInfo();

// 2
async function greeting() {
  console.log('Hello...',);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("...world!"), 1000);
  });
  const result = await promise;
  console.log(result);
}
// greeting();

// ! https://dev.to/sagarrth/demystifying-async-await-as-generators-promises-91i

(async function (url) {
  const response = await fetch(url);
  return await response.json();
})('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log(data))

//

function* getData(url) {
  const response = yield fetch(url);
  return response.json();
}
const iterator = getData('https://jsonplaceholder.typicode.com/todos');
iterator
  .next()
  .value.then((val) => iterator.next(val).value)
  .then((data) => console.log(data))