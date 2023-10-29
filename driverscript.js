

const testArray = [50,40,15,19,5];
let testTree = new Tree(testArray);
console.log(testTree.isBalanced());
console.log(testTree.levelOrder());
console.log(testTree.inorder());
console.log(testTree.preorder());
console.log(testTree.postOrder());
testTree.insert(400);
testTree.insert(700);
testTree.insert(600);
console.log(testTree.isBalanced());
testTree.rebalance();
console.log(testTree.levelOrder());
console.log(testTree.inorder());
console.log(testTree.preorder());
console.log(testTree.postOrder());
