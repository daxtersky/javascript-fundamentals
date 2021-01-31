// ! https://dev.to/rajatmehra05/what-is-async-await-127p


// * ASYNC AWAIT
// 1
async function getInfo(){
  console.log('a');
  await setTimeout(() => {
    console.log('b');
  }, 1);
  console.log('c');
}
// getInfo();

// 2
async function greeting() {
  console.log('Hello...', );
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("...world!"), 1000);
  });
  const result = await promise;
  console.log(result);
}
greeting();