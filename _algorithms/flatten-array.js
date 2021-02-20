// * FLATTEN ARRAY with any deep

const newArray = [];
const flattenArray = (items, array) => {
  for (const item of items) {
    Array.isArray(item)
      ? flattenArray(item, array) // item is an array, go deeper!
      : array.push(item);
  }
}
flattenArray([1, [2, [3, [4]], [5]]], newArray);
// flattenArray([1, [2, [3]]], newArray);

console.log(newArray);








//                                 => arrayItems.forEach(arrayItem => {
//   const arr = [];
//   if (Array.isArray(arrayItem)) {
//     // console.log('arrayItem', arrayItem);
//     return flatArray(arrayItem);
//   } else {
//     console.log('not arrayItem', arrayItem);
//     return arr.push(arrayItem);
//   }
// })

// const foo = flatArray(arrayRandomDeep);
// console.log(foo);
//