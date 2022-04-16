/**
 * * MAP
 * 📚 https://javascript.info/map-set
 * collection of keyed values
 * unline objects, keys are not converted to strings
 * 📚 https://www.taniarascia.com/understanding-map-and-set-javascript/
 */

const map = new Map();
map.set(1, 'first value');
map.set('2', 'second value');
map.set(true, 'third value');

console.log(map);
console.log(map.get(1));
console.log(map.get('2'));
console.log(map.get(true));
console.log(map.size);

// * unlike objects iterations go with the same order
for (const i of map.keys()) {
  console.log('key:', i);
}
for (const i of map.values()) {
  console.log('value:', i);
}
for (const i of map.entries()) {
  console.log('entry:', i);
}

// * WEEKMAP
// 📚 https://javascript.info/weakmap-weakset
// easily removed from garbage collector