// * TREE


interface TreeItem {
  id: number;
  parentId?: number;
}
var tree: TreeItem[] = [
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 1 },
  // { id: 6, parentId: 3 },
  // { id: 7, parentId: 3 },
  // { id: 8, parentId: 2 },
];

// show tree levels
const showTree = (tree: TreeItem[]): void => {
  const treeList = tree.sort((a, b) => (a.id - b.id)).sort((a, b) => (a.parentId - b.parentId));
  console.log(treeList[0]);
  treeList.shift()
  console.log(treeList);

  // ! I CANNOT DO IT !!! :(

};
showTree(tree);
