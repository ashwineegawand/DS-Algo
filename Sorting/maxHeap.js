//https://reginafurness.medium.com/implementing-a-max-heap-in-javascript-b3e2f788390c

class MaxHeap {
    constructor() {
        //array for heap
        this.values = [];
    }

    parent(index) {
        return Math.floor((index-1)/2);
    }

    leftChild(index) {
        return (index * 2) + 1;
    }

    rightChild(index) {
        return (index * 2) + 2;
    }

    //in a complete binary tree
    //number of leaves = (nomber of nodes) / 2
    isLeaf(index) {
        return (
            index >= Math.floor(this.values.length / 2) && index <= this.values.length - 1
        )
    }

    swap(index1, index2) {
        [this.values[index1], this.values[index2]] = [this.values[index2], this.values[index1]];
    }

    add(element) {
        //add element at the end of heap
        this.values.push(element);

        //move element up until it's in the correct position
        this.heapifyUp(this.values.length - 1);
    }

    heapifyUp(index) {
        let currentIndex = index;
        let parentIndex = this.parent(currentIndex);

        while(currentIndex > 0 && this.values[currentIndex] > this.values[parentIndex]) {
            this.swap(currentIndex, parentIndex);
            currentIndex = parentIndex;
            parentIndex = this.parent(currentIndex);
        }
    }

    extractMax() {
        if(this.values.length < 1) return "Heap is Empty";

        let max = this.values[0];
        let end = this.values.pop();

        this.values[0] = end;

        this.heapifyDown(0);

        return max;
    }

    heapifyDown(index) {
        if(!this.isLeaf(index)) {
            let largestIndex = index;
            let leftChildIndex = this.leftChild(index);
            let rightChildIndex = this.rightChild(index);

            if(this.values[leftChildIndex] > this.values[largestIndex]) {
                largestIndex = leftChildIndex;
            }

            if(this.values[rightChildIndex] > this.values[largestIndex]) {
                largestIndex = rightChildIndex;
            }

            if(largestIndex !== index) {
                this.swap(largestIndex, index);
                this.heapifyDown(largestIndex);
            }
        }
    }

    buildHeap(array) {
        if(array.length <= 0 ) return array;
        this.values = array;
        for(let i=Math.floor(this.values.length/2); i>=0; i--) {
            this.heapifyDown(i);
        }
        return this.values;
    }

    //return value of Max Heap
    peek() {
        return this.values[0];
    }

    print() {
        let i = 0;
        while(!this.isLeaf(i)) {
            console.log("Parent : " + this.values[i]);
            console.log("   Left Child : " + this.values[this.leftChild(i)]);
            console.log("   Right Child : " + this.values[this.rightChild(i)]);
            i++; 
        }
    }
}

let maxHeap = new MaxHeap();
let array = [0, 1, 2, 3, 4, 5]

console.log("input : " + array);
console.log("Max Heap : " + maxHeap.buildHeap(array));
console.log(maxHeap.peek());
console.log(maxHeap.print());