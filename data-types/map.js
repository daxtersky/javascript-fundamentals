// ! https://javascript.info/map-set
// ! https://javascript.info/weakmap-weakset

// * MAP
// collection of keyed values
// unline objects keyes are not converted to strings
const map = new Map();
map.set(1, 'first value');
map.set('2', 'second value');
map.set(true, 'third value');

console.log(map);
console.log(map.get(1));
console.log(map.get('2'));
console.log(map.get(true));
console.log(map.size);

// unlike objects iterations go with the same order
for (const i of map.keys()) {
  console.log(i);
}
for (const i of map.values()) {
  console.log(i);
}
for (const i of map.entries()) {
  console.log(i);
}

// * WEEKMAP
// easily removed from garbage collector