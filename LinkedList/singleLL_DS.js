class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    //get length
    getLength() {
        let current = this.head;
        while(current) {
            this.length++;
            current = current.next;
        }
    }
    //traverse
    print() {
        let current = this.head;
        let arr = [];
        while(current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    search(val) {
        let current = this.head;
        while(current) {
            if(current.val === val) {
                return val + " is PRESENT in linked list."
            }
            current = current.next;
        }
        return val + " is NOT PRESENT in linked list."
    }

    //pop -> remove element from the end
    pop() {
        let current = this.head;
        while(current.next) {
            if(current.next.next === null) {
                current.next = null;
                this.length--;
                return;
            }
            current = current.next;
        }
    }

    //push -> add element at the end
    push(val) {
        let newNode = new Node(val);
        let current = this.head;
        while(current) {
            if(current.next === null) {
                current.next = newNode;
                this.length++
                return;
            }
            current = current.next;
        }
    }

    //shift -> add alement at the start
    shift(val) {
        let newNode = new Node(val);
        let current = this.head;
        this.head = newNode;
        this.head.next = current;
        this.length++;
    }

    //unshift -> remove element from the start
    unshift() {
        let newHead = this.head.next;
        this.head.next = null;
        this.head = newHead;
        this.length--;
    }

    //insert -> insert element at specific location
    insert(val, pos) {
        //start from head, 
        //set counter = 1, keep trvaersing LL using while loop until counter === pos and current node is not null
        // 1 -> 2 -> 3  // 1
        let newNode = new Node(val); 
        let counter = 1;
        let current = this.head; 
        
        while(current) {
            if(pos === 1) {//we can call here shift as well
                this.head = newNode;
                newNode.next = current;
                this.length++;
                return;
            }
            if(counter === pos-1) { 
                let nextNode = current.next; 
                current.next = newNode; 
                if(nextNode !== null) {
                    newNode.next = nextNode; 
                }
                this.length++;
                return;
            }
            
            current = current.next;
            counter++;
        }

        console.log("Position is out of bounds.");
        return;
    }

    //delete -> delete element from specific location
    delete(pos) {
        //1 -> 2 -> 3
        let counter = 1;
        let current = this.head;
        let prev = null;
        
        while(current) {
            if(counter === pos) {
                if(prev === null) { //if pos = 1 i.e. head //or we can call here unshift
                    this.head = current.next;
                    this.length--;
                    return;
                }
                prev.next = current.next; 
                this.length--;
                return;
            }
            
            prev = current;
            current = current.next;
            counter++;
        }

        console.log("Position is out of bounds.");
        return;
    }
    
}

let list = new LinkedList();
list.head = new Node(1);
list.head.next = new Node(2);
list.head.next.next = new Node(3);
list.head.next.next.next = new Node(4);
list.head.next.next.next.next = new Node(5);
list.length = 5;

// console.log(list);
// list.print();
// console.log(list.search(3));
// console.log(list.search(5));
// console.log(list.search(9));

// list.pop();

// list.push(6);

// list.shift(6);

// list.unshift()

// list.insert(9,1);
// list.insert(1,9);
// list.insert(9,3);
// list.insert(9,5);
// list.insert(9,6);

// list.delete(1);
// list.delete(7);
// list.delete(4);
list.delete(5);
console.log(list);
