const LinkedList = require('./LinkedList')




class Queue {
    constructor() {
      this.size = 0;
      this.first = null;
      this.last = null;
      this._list = new LinkedList();
    }

    enqueue(val){
        this._list.push(val)
        this.first = this._list.head
        this.last = this._list.tail
        this.size = this._list.length
    }

    dequeue(){
        let getVal = this._list.shift()
        this.first = this._list.head
        this.last = this._list.tail
        this.size = this._list.length
        return getVal
    }

    peek() {
        return this._list.getAt(0)
    }

    isEmpty(){
        return this._list.isEmpty()
    }


  }



module.exports = Queue

