delete(value, currentNode= this.root){
    //the next highest node which is the farthest left branch on right will replace that node
    //--if need a node to replace take next highest /lowest and replace
        if(currentNode === null) return currentNode; //base case
    
        //find the node
        if(value < currentNode.data){
          currentNode.leftChild = this.delete(value, currentNode.leftChild);
          console.log(1);
          return currentNode;
        }
        else if (value > currentNode.data){
          currentNode.rightChild=this.delete(value, currentNode.rightChild);
          console.log(2);
          return currentNode;
        }else{
    
        // this will then generate a current node that is not less than the current node or greater than and it will move 
        // on to the next step
    
        //delete with no leafs
        if(currentNode.left === null && currentNode.right === null){
          currentNode = null;
         return currentNode;
        }
       else if(currentNode.left === null){
          let replacement = currentNode.rightChild;
          currentNode.data = replacement.data;
          replacement = null;
          return currentNode;
       }
       else if(currentNode.right === null){
          let replacement = currentNode.leftChild;
          currentNode.data = replacement.data;
          replacement = null;
          return currentNode;
          
        }
        else{
          let successor = currentNode.rightChild;
          let successorParent = currentNode;
          while(successor.leftChild !==null){
            successorParent = successor;
            successor = successor.leftChild;
          }
         currentNode.data = successor.data;
         successorParent.leftChild =successor.rightChild;
         return currentNode;
         
        }
      }}