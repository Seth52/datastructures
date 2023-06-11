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
append(value) {
    if (this.listHead == null) this.prepend(value);
    else {
      let tmp = this.listHead;
      while (tmp.nextNode != null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value);
    }}
size(){
    let tmp = this.listHead;
    let counter = 0; 
    while (tmp != null){
         counter++;
         tmp = tmp.nextNode;
    }
    return counter;
} 

head(){
    return this.listHead;
    }
    
tail(){
    let tmp = this.listHead;
    while (tmp !=null){
        tmp = tmp.nextNode;
    }
return tmp;
}
at(index){
    let tmp =this.listHead;
   for(let i = 0; i<index;i++){
    tmp = tmp.nextNode;
    if(tmp == null){
        return "No item at this index";
    }
    return tmp;
   }
}
pop(){
    let tmp = this.listHead;
    let prev = tmp;
    while(tmp.nextNode !=null){
        prev = tmp;
        tmp = tmp.nextNode;
    }
    prev.nextNode = null;
}

contains(value){
    let tmp = this.listHead;
    while(tmp != value){
        if(tmp.value === value) return true
        tmp = tmp.nextNode;
    }
 
        return false
}
    
find(value){
    let tmp = this.listHead;
    let index = 0;
    while(tmp != null){
        if(tmp.value === value)return index;
        tmp = tmp.nextNode;
        index++;


    }
    return null;
}

toString() {
    let tmp = this.listHead;
    let stringList = "";
    while (tmp != null) {
      stringList += `(${tmp.value}) -> `;
      tmp = tmp.nextNode;
    }
    return (stringList += "null");
  }




};

class Node{
constructor(value){
    this.value = value || null; //sets to null if no value provided
    this.nextNode = null;
}

};

