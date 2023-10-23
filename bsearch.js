function printMe(node){
  console.log(node.data)
}//can use this as a callbackfn for level order to print the nodes 

class Node{
    
    constructor(data, leftChild = null, rightChild = null){
        this.data = data;
        this.leftChild =leftChild;
        this.rightChild=rightChild;

    }


}// having it default null is useful for when u might not have left or right 

class Tree{
    
    constructor(array){  
        const sortedArray = [...new Set(array)].sort((a,b) => a-b);//set removes unique
        this.root=this.buildTree(sortedArray);
    }



buildTree(sortedArray){
    if(sortedArray.length === 0)return null;
    const mid = Math.floor(sortedArray.length /2);
    const newNode =new Node(sortedArray[mid]);
    newNode.leftChild = this.buildTree(sortedArray.slice(0,mid));
    newNode.rightChild= this.buildTree(sortedArray.slice(mid+1) )// mid plus one so you dont grab the middle node
    return newNode;

}

prettyPrint(node = this.root, prefix = "", isLeft = true) {
    if (node.rightChild) {
      this.prettyPrint(node.rightChild, `${prefix}${isLeft ? '|   ' : '    '}`, false)
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.leftChild) {
      this.prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '|   '}`, true)
    }
  }

  insert(value, currentNode = this.root) {
    if (currentNode === null) {
      return new Node(value);
    }
    if (currentNode.data === value) {
      return currentNode;
    }
    if (value < currentNode.data) {
      currentNode.leftChild = this.insert(value, currentNode.leftChild);
    } else {
      currentNode.rightChild = this.insert(value, currentNode.rightChild);
    }
    return currentNode;
  }

   delete(value, currentNode = this.root) {
    if (currentNode === null) return currentNode; // Base case: value not found
  
    // Find the node
    if (value < currentNode.data) {
      currentNode.leftChild = this.delete(value, currentNode.leftChild);
      return currentNode;
    } else if (value > currentNode.data) {
      currentNode.rightChild = this.delete(value, currentNode.rightChild);
      return currentNode;
    } else {
      // Node found, handle deletion based on child nodes
  
      // Case 1: Node has no children
      if (currentNode.leftChild === null && currentNode.rightChild === null) {
        currentNode = null;
        return currentNode;
      }
      // Case 2: Node has only a right child
      else if (currentNode.leftChild === null) {
        let replacement = currentNode.rightChild;
        currentNode = replacement;
        console.log('test1');
        return currentNode;
      }
      // Case 3: Node has only a left child
      else if (currentNode.rightChild === null) {
        let replacement = currentNode.leftChild;
        currentNode=replacement;
      console.log('test2');
        return currentNode;
      }
      // Case 4: Node has both left and right children
      else {
        let successor = currentNode.rightChild;
        let successorParent = currentNode;      
        console.log('test3');
        while (successor.leftChild !== null) {
          successorParent = successor; 
          successor = successor.leftChild; 
         console.log('test4');
        }
        if (successorParent !== currentNode) {
          successorParent.leftChild = successor.rightChild;
        } else {
          successorParent.rightChild = successor.rightChild;
        }
         // Assign the left and right child pointers to the successor node -- have to assing the left tree that is hanging out there to the new node -- so 
         // when we take the successor the new value we must take the current nodes left andright children and assign it so that it keeps those nodes in tact otherwise
         //they get deleted 
        successor.leftChild = currentNode.leftChild;
        successor.rightChild = currentNode.rightChild;

  // Update the current node with the successor node
        currentNode = successor;
        return currentNode;
      }
    }
  }

  find(value, currentNode = this.root){
    if (value === currentNode.data || currentNode === null){return currentNode}
    if (value < currentNode.data) {
      return this.find(value, currentNode.leftChild);
    } else  {
      return this.find(value, currentNode.rightChild);
     
  
  }
      }

levelOrder(callbackFn){
//need a base case
// start with the root node
//put the root node in the q 
//if has left or right nodes// put those in q and then put root node in
//visited aray. 
//recursively do the same thing for the other nodes
const q = [this.root];
const levelOrder = [];

while(q.length > 0){
if(q[0].leftChild){q.push(q[0].leftChild)};
if(q[0].rightChild){q.push(q[0].rightChild)};
if(callbackFn)callbackFn(q[0])

levelOrder.push(q.shift());

}


if(!callbackFn)return levelOrder;

//could assign currentNode = q.shift() -- so that it is assigned the variable of the removed node. 
//then could use currentNode instead of q[0] in callback and q.shift in levelorder push

}

inorder(callbackFn,currentNode=this.root,inorderList=[]){
// order is leftchild-> parent -> right child


if (currentNode === null)return;


if(currentNode.leftChild){this.inorder(callbackFn,currentNode.leftChild, inorderList)};
callbackFn ? callbackFn(currentNode) : inorderList.push(currentNode.data);
if(currentNode.rightChild){this.inorder(callbackFn,currentNode.rightChild,inorderList)};
if(inorderList.length >0) return inorderList;

/*q.push(currentNode);
if(currentNode.leftChild){this.inorder(currentNode=currentNode.leftChild);}
else if(currentNode.rightChild){results.push(q.pop());this.inorder(currentNode=currentNode.rightChild);}
else{currentNode = q[q.length-1];this.inorder(currentNode) }

return results*/

}
 
//preorder(root) if not root return none - process root -
//recursive call preorder on root.left
//recursive call preorder on root.right
preorder(callbackFn, currentNode=this.root,preorderList=[]){

if (currentNode === null)return;
callbackFn ? callbackFn(currentNode):preorderList.push(currentNode.data);
if(currentNode.leftChild){this.preorder(callbackFn,currentNode.leftChild,preorderList)};
if(currentNode.rightChild){this.preorder(callbackFn,currentNode.rightChild,preorderList)};
if(preorderList.length>0)return preorderList;



}
//this traversal is useful for deleting a tree with childless nodes
//if not root return ///// postorder(root.left) - > postorder(root.right) -->process(root) with callback if needed
//
postOrder(callbackFn, currentNode=this.root,postOrderList=[]){
if(currentNode === null) return;
if(currentNode.leftChild){this.postOrder(callbackFn,currentNode.leftChild,postOrderList)};
if(currentNode.rightChild){this.postOrder(callbackFn,currentNode.rightChild,postOrderList)};
callbackFn ? callbackFn(currentNode):postOrderList.push(currentNode.data);
if(postOrderList.length>0)return postOrderList;


}










  }


  //take the rightnode of the node that needs to be deleted
  // go as far left as you can on that node 
  //take that node's value ...remove it from current position
  //put that node at spot where deleted node will be
  //delete the other node







//initialize start = 0, end = length of the array -1
//mid = (start+end/2)
//create tree node with mid as root called a
//recursively calc mid of left subarray and make it root of left subtree of a
//recursively calc mid of right subarray and make it root of right subtree of a


function printNodeValue(node) {
  console.log(node.data);
}