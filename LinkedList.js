class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }

  class LinkedList {
    constructor(vals = []) {
      this.head = null;
      this.tail = null;
      this.length = 0;
  
      for (let val of vals) this.push(val);
    }
  
    /** push(val): add new value to end of list. */
  
    push(val) {
      let newNode = new Node(val);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.length += 1;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
        newNode.next = null;
        this.length += 1;
      }
    }
  
    /** unshift(val): add new value to start of list. */
  
    unshift(val) {
      let newNode = new Node(val);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        this.length += 1;
      } else {
        newNode.next = this.head;
        this.head = newNode;
        this.length += 1;
      }
    }
  
    /** pop(): return & remove last item. */
  
    pop() {
      let currentNode = this.head;
      let tailNode = this.tail;
      try {
        if (!this.length) {
          throw new Error("list is empty");
        } else if (currentNode === tailNode) {
          this.head = null;
          this.tail = null;
          this.length = 0;
          return currentNode.val;
        } else {
          while (currentNode) {
            if (currentNode.next.val === tailNode.val) {
              this.tail = currentNode;
              this.tail.next = null;
              this.length -= 1;
              return tailNode.val;
            }
            currentNode = currentNode.next;
          }
        }
      } catch (error) {
        return error;
      }
    }
  
    /** shift(): return & remove first item. */
  
    shift() {
      let currentNode = this.head;
      let tailNode = this.tail;
      try {
        if (!this.length) {
          throw new Error("list is empty");
        } else if (currentNode === tailNode) {
          this.head = null;
          this.tail = null;
          this.length = 0;
          return currentNode.val;
        } else {
          let secondNode = currentNode.next;
          this.head = secondNode;
          this.length -= 1;
          return currentNode.val;
        }
      } catch (error) {
        return error;
      }
    }

    getAt(idx) {
        let currentNode = this.head;
    
        try {
          if (idx > this.length || idx < 0) {
            throw new Error("Index is invalid");
          } else {
            for (let i = 0; i < idx; i++) {
              currentNode = currentNode.next;
            }
          }
          return currentNode.val;
        } catch (error) {
          return error;
        }
      }
    
      isEmpty() {
        if(!this.head){
            return true
          }else{
            return false
          }
      }  
}

module.exports = LinkedList