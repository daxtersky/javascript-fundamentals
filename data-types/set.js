// ! https://javascript.info/map-set
// ! https://javascript.info/weakmap-weakset

// * SET
// collection of unique values
const setNumbers = new Set([1, 2, 3, 3, 3, 3, 3, 3, 4]);
console.log(setNumbers);
const setStrings = new Set(['Poland']);
setStrings.add('Holland');
setStrings.add('Holland');
setStrings.add('Germany');
console.log(setStrings);

for (const iterator of setNumbers) {
  console.log(iterator);
}
for (const iterator of setStrings) {
  console.log(iterator);
}

// * WEEKSET
// easily removed from garbage collector
