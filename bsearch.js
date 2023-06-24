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
         // Assign the left and right child pointers to the successor node
        successor.leftChild = currentNode.leftChild;
        successor.rightChild = currentNode.rightChild;

  // Update the current node with the successor node
        currentNode = successor;
        return currentNode;
      }
    }
  }

  find(value, currentNode = this.root){





    
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


