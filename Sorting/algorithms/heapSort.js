//https://reginafurness.medium.com/implementing-heap-sort-in-javascript-e52683b54935
function heapSort(array) {
    //create max heap from 
    for(let i=Math.floor(array.length/2); i>=0; i--) {
        heapify(array, i, array.length);
    }

    for(let i=array.length-1; i>0; i--) {
        swap(array, 0, i);
        heapify(array, 0, i);
    }
    return array;
}

function swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function heapify(arr, index, length) {
    let largestIndex = index;
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = index * 2 + 2;

    if(leftChildIndex < length && arr[leftChildIndex] > arr[largestIndex]) {
        largestIndex = leftChildIndex;
    }

    if(rightChildIndex < length && arr[rightChildIndex] > arr[largestIndex]) {
        largestIndex = rightChildIndex;
    }

    if(largestIndex !== index) {
        swap(arr, largestIndex, index);
        heapify(arr, largestIndex, length);
    }

    return arr;
}

console.log(heapSort([0, 1, 2, 3, 4 ,5]));
console.log(heapSort([9, 8, -1, 100, 1, 8, 1, 6, 2, 0]));
console.log(heapSort([99]));
console.log(heapSort([]));