// * LINKED LIST

interface LinkedList {
  value: number;
  next: LinkedList;
}

const list: LinkedList = {
  value: 5,
  next: {
    value: 6,
    next: {
      value: 7,
      next: null
    }
  }
};

console.log(list);