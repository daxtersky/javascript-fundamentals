// * LINKED LIST

interface LinkedList {
  value: number;
  next: LinkedList;
}

const linkedlist: LinkedList = {
  value: 5,
  next: {
    value: 6,
    next: {
      value: 7,
      next: null
    }
  }
};

console.log(linkedlist);