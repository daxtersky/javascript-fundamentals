// * FLATTEN ARRAY with any deep // recursion

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
