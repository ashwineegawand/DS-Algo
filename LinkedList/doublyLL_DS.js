class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //get length
    getLength() {
        let counter = 0;
        let current = this.head;
        while(current) {
            counter++
            current = current.next;
        }
        return counter;
    }
    //traverse
    print() {
        let arr = [];
        let current = this.head;

        while(current) {
            arr.push(current.val);
            current = current.next;
        }

        console.log(arr);
    }

    //search
    search(val) {
        let current = this.head;
        let counter = 0;
        while(current) {
            counter++;
            if (val === current.val) {
                console.log(val + " is present in DLL at position " + counter);
                return
            }    
            current = current.next;
        }

        console.log(val + " is NOT present in DLL");
    }

    //pop -> remove element from the end
    // 1 <-> 2 <-> 3
    pop() {
        let current = this.head;
        let prev = null;
        while(current) {
            if(current.next === null) {
                prev.next = null;
                this.length--;
            }
            prev = current;
            current = current.next;
        }
    }

    //push -> add element at the end
    push(val) {
        let current = this.head;
        while(current) {
            if(current.next === null) {
                current.next = new Node(val);
                this.length++;
                return;
            }
            current = current.next;
        }
    }

    //shift -> add alement at the start
    shift(val) {
        let oldHead = this.head;
        this.head = new Node(val);
        oldHead.prev = this.head;
        this.head.next = oldHead;
        this.head.prev = null;
        this.length++;
    }

    //unshift -> remove element from the start
    unshift() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }

    //insert -> insert element at specific location
    //1 -> 2 -> 3  (9,4)
    insert(val, pos) {
        let counter = 1;
        let current = this.head;
        let newNode = new Node(val);

        while(current) {
            if(pos === 1) {
                this.head = newNode;
                newNode.next = current;
                current.prev = newNode;
                this.length++;
                return;
            }
            if(counter === pos-1) {
                let nextNode = current.next;
                current.next = newNode;
                newNode.next = nextNode;
                newNode.prev = current;
                if(nextNode !== null) {
                    nextNode.prev = newNode;
                }
                this.length++;
                return
            }
            counter++;
            current = current.next;
        }
        console.log("Position is out of bounds.");
        return;
    }

    //delete -> delete element from specific location
    //1 <-> 2 <-> 3
    delete(pos) { //2
        let current = this.head;
        let counter = 1;
        while(current) {
            if(pos === counter) {
                let nextNode = current.next; 
                let prevNode = current.prev; 
                if(prevNode === null) {
                    this.head = nextNode;
                } else {
                    prevNode.next = nextNode;
                }

                if(nextNode !== null) nextNode.prev = prevNode;
                this.length--;
                return
            }
            counter++;
            current = current.next;
        }

        console.log("Position is out of bounds.");
        return;
    }
}

let list = new DoublyLinkedList();
list.head = new Node(1);
list.head.prev = null;
list.head.next = new Node(2);

list.head.next.prev = list.head;
list.head.next.next = new Node(3);

list.head.next.next.prev = list.head.next;
list.head.next.next.next = new Node(4);

list.head.next.next.next.prev = list.head.next.next;
list.head.next.next.next.next = new Node(5);

list.head.next.next.next.next.prev = list.head.next.next.next;

list.length = 5;


// console.log(list.getLength());

// list.print();

// list.search(9);
// list.search(4);
// list.search(0);
// list.search(null);

// list.pop();

// list.push(9);

// list.unshift();

// list.insert(9,9);
// list.insert(9,1);
// list.insert(9,2);
// list.insert(9,5);
// list.insert(9,6);

// list.delete(1);
// list.delete(2);
// list.delete(5);
// list.delete(6);

console.log(list);

list.print();