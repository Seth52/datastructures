class LinkedList{
    constructor(){
this.listHead = null;

    }

prepend(value){
    let tmp = null;
    if(this.listHead != null){
       tmp = this.listHead;
    }
    this.listHead = new Node(value);
    this.listHead.nextNode = tmp;
 
}


head(){
    return this.listHead;
    }
  
};

class Node{
constructor(value){
    this.value = value || null; //sets to null if no value provided
    this.nextNode = null;
}

};

