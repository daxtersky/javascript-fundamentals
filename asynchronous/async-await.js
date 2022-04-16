/**
 * * ASYNC AWAIT
 * 🏃‍♂️ "npm i" and "node async-await.js" in this folder
 */

const fetch = require('node-fetch');

// 📚 https://dev.to/rajatmehra05/what-is-async-await-127p
// 1
async function getInfo() {
  console.log('async/await a');
  await setTimeout(() => {
    console.log('async/await b');
  }, 1);
  console.log('async/await c');
}
getInfo();

// 2
async function greeting() {
  console.log('Hello...',);
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("...world!"), 1000);
  });
  const result = await promise;
  console.log('Promise/`setTimeout', result);
}
greeting();

// 📚 https://dev.to/sagarrth/demystifying-async-await-as-generators-promises-91i

(async function (url) {
  const response = await fetch(url);
  return await response.json();
})('https://jsonplaceholder.typicode.com/todos/1').then((data) => console.log('iife fetch', data))

function* getData(url) {
  const response = yield fetch(url);
  return response.json();
}
const iterator = getData('https://jsonplaceholder.typicode.com/todos');
iterator
  .next()
  .value.then((val) => iterator.next(val).value)
  // .then((data) => console.log('iterator', data))