class Node {
    constructor (data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class SinglyLL {
    constructor () {
        this.head = null;
        this.tail = null;
    }

    addToFirst (value) {
        const newNode = new Node(value, this.head)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head = newNode;
        }
    }

    addToLast (value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    convertArrayToLLAndAddItInLast(arr) {
        if (arr.length === 0) return
        else {
            let i = 0;
            while(arr.length > i) {
                const newNode = new Node(arr[i])
                if (!this.head) {
                    this.head = newNode;
                    this.tail = newNode;
                } else {
                    this.tail.next = newNode;
                    this.tail = newNode;
                }
                i++
            }
        }
    }

    deleteNodeWithSpecifiedValue (value) {
        if (!this.head) return;
        else {
            let prev = null;
            let current = this.head;
            while (current) {
                if (current.data === value) {
                    if (prev === null) {
                        this.head = current.next
                    }
                    else {
                        prev.next = current.next;
                    }
                }
                prev = current;
                current = current.next;
            }
        }
    }

    insertAfterSpecifiedValue (value, valueToInsert) {
        if (!this.head) return 
        else {
            let current = this.head;
            let next = null;
            while (current) {
                if (current.data === value) {
                    const newNode = new Node(valueToInsert)
                    next = current.next;
                    current.next = newNode;
                    newNode.next = next;
                    return;
                }
                else {
                    current = current.next;
                }
            }
        }
    }

    displayList () {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }

    displayListInReverse () {
        if (!this.head) return
        else this.displayReverseHelper(this.head)
    }

    displayReverseHelper (node) {
        if (node) {
            this.displayReverseHelper(node.next)
            console.log(node.data);
        }
        
    }
}


const obj = new SinglyLL()

const array = [23,34,12,65]
// obj.addToFirst(10)
// obj.addToFirst(20)
// obj.addToFirst(30)
obj.addToFirst(40)
obj.addToLast(60)
obj.convertArrayToLLAndAddItInLast(array)
obj.deleteNodeWithSpecifiedValue(40)
obj.deleteNodeWithSpecifiedValue(65)
obj.insertAfterSpecifiedValue(23, 77)
obj.displayListInReverse()
console.log('-------------------------------------');
obj.displayList()



