// ! https://medium.com/siliconwat/data-structures-in-javascript-1b9aed0ea17c

// * QUEUE
// sequential structure
// FIFO - first in first out

const queue = ['first waiting in line', 'second waiting after first', 'third waiting'];
const fifoPrincipleAdd = (itemIn, queueStructure) => {
  queueStructure.push(itemIn);
}
const fifoPrincipleRemove = (queueStructure) => {
  queueStructure.shift();
}
fifoPrincipleAdd('fourth coming into the queue...', queue)
fifoPrincipleRemove(queue)
console.log(queue);

// * STACK
// sequential structure
const stack = ['bad pancake', 'second pancake', 'third pancake'];
const filoPrincipleAdd = function (itemIn, stackStructure) {
  stackStructure.push(itemIn);
};
const filoPrincipleRemove = (stackStructure) => stackStructure.pop()

filoPrincipleAdd('new hot pancake', stack);
filoPrincipleAdd('I wanna eat pancake!', stack);
filoPrincipleRemove(stack);
console.log(stack);

// * TREE
interface TreeItem {
  id: number;
  parentId?: number;
}
var tree: TreeItem[] = [
  { id: 1 },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 3 },
  { id: 7, parentId: 3 },
];
