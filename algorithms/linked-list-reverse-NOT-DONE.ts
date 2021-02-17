// * reverse singly linked list (lista jednokierunkowa)

// ! https://blog.soltysiak.it/pl/2016/08/10-najpopularniejszych-algorytmicznych-pytan-rekrutacyjnych/

interface LinkedList {
  value: number;
  next: LinkedList;
}

const linkedList: LinkedList = {
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
