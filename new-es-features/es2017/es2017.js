// ! https://www.freecodecamp.org/news/here-are-examples-of-everything-new-in-ecmascript-2016-2017-and-2018-d52fa3b5a70e/

// * OBJECT VALUES
const cities = { Warsaw: 3, Wroclaw: 2, Zakopane: 1 };
const countries = { 1: 'Netherlands', 2: 'USA', 3: 'Poland' };
const cityValues = Object.keys(cities).map(key => cities[key]); // es2015 way
const countryValues = Object.values(countries); // es2017 way
// console.log(cityValues);
// console.log(countryValues);

// * OBJECT ENTRIES
// const cityEntries = Object.keys(cities).forEach(key => console.log(key, cities[key])); // old way
// const countryEntries = Object.keys(countries).forEach(key => console.log(key, countries[key])); // old way
for (const [key, value] of Object.entries(cities)) { // new way
//  console.log(key, value);
}
for (const [key, value] of Object.entries(countries)) { // new way
//  console.log(key, value);
}

// * ASYNC AWAIT
function getUserBalanceOldWay(userId) { // old way
  getUser(userId)
    .then(getBalance)
    .then(amount => console.log('promise...', amount)) // old way
}
async function getUserBalanceNewWay(userId) { // async await way
  const user = await getUser(userId);
  const amount = await getBalance(user);
  console.log('async await...', amount); // async await way
}
// getUserBalanceOldWay('1'); // old way
// getUserBalanceNewWay('2'); // async await way

function getUser(userId) {
  return new Promise(res => {
    setTimeout(() => {
      // res('Wallae');
      res('Wallace');
    }, 500);
  })
}
function getBalance(param) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (param === 'Wallace') {
        res("$167'000");
      } else {
        rej('Unknown user!');
      }
    }, 500);
  })
}