// * reverse singly linked list (lista jednokierunkowa)

// ! https://blog.soltysiak.it/pl/2016/08/10-najpopularniejszych-algorytmicznych-pytan-rekrutacyjnych/

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

// ! https://www.youtube.com/watch?v=UCv-EmtvPe4

// * BINARY TREES
// ! https://dev.to/codespresso/elementary-data-structures-with-javascript-binary-trees-part-2-1pl6
// ! https://dev.to/codespresso/elementary-data-structures-with-javascript-binary-trees-part-3-7f8