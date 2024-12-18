function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length-1);
    return arr;
}

function quickSortHelper(A, start, end) {
    if(start >= end) return;

    let pivotIndex = Math.floor(Math.random()*(end-start)+start);

    [A[pivotIndex], A[start]] = [A[start], A[pivotIndex]];

    let smaller = start+1;
    let bigger = end;

    while(smaller <= bigger) {
        if(A[smaller] < A[start]) {
            smaller++;
        } else if(A[bigger] > A[start]) {
            bigger--;
        } else {
            [A[smaller], A[bigger]] = [A[bigger], A[smaller]]; //swap
            smaller++;
            bigger--;
        }
    }
    [A[bigger], A[start]] = [A[start], A[bigger]];
    quickSortHelper(A, start, bigger-1);
    quickSortHelper(A, bigger+1, end);
}

console.log(quickSort([5,2,1,8,4,7,6,3]));
console.log(quickSort([4,8,1,5,9,0,8,2,-9,100,-337,2,3,9]));