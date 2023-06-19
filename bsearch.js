class Node{
    
    constructor(data, leftChild = null, rightChild = null){
        this.data = data;
        this.leftChild =leftChild;
        this.rightChild=rightChild;

    }


}// having it likes this is useful for when u might not have left or right 

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

}


//initialize start = 0, end = length of the array -1
//mid = (start+end/2)
//create tree node with mid as root called a
//recursively calc mid of left subarray and make it root of left subtree of a
//recursively calc mid of right subarray and make it root of right subtree of a


