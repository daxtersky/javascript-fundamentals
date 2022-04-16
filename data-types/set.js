/**
 * * SET
 * 📚 https://javascript.info/map-set
 * collection of unique values
 * 📚 https://javascript.info/weakmap-weakset 
 * 📚 https://www.taniarascia.com/understanding-map-and-set-javascript/
 * WEEKSET - easily removed from garbage collector
 */

// * SET
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
