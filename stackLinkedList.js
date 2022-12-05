const LinkedList = require('./LinkedList')

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
        this._list = new LinkedList()
    }

    push(val){
        this._list.unshift(val)
        this.first = this._list.head
        this.last = this._list.tail
        this.size = this._list.length

    }

    pop(){
       let firstVal = this._list.shift()
       this.first = this._list.head
       this.last = this._list.tail
       this.size = this._list.length
       return firstVal
    }

    peek(){
        return this._list.getAt(0)
    }

    isEmpty(){
        return this._list.isEmpty()
    }
}

module.exports = Stack