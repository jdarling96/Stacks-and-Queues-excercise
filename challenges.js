class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Stack{
    constructor(){
        this.first = null
        this.last = null
        this.size = 0
    }

    reverse(string){
        
        this.size = string.length - 1
        let node =  new Node(string[this.size])
        this.first = node
        this.last = node
        let reversed = string[this.size]
        while(this.size > 0){
            
            this.size -= 1
            let newNode = new Node(string[this.size])
            newNode.next = this.first
            this.first = newNode 

            
            reversed += this.first.val
            this.first
        }

        return reversed

    }
}

module.exports = Stack