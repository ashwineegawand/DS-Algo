function quickSort(arr) {
    quickSortHelper(arr, 0, arr.length-1);
    return arr;
}

function quickSortHelper(A, start, end) {
    //base case
    if(start >= end) return;

    let pivotIndex = Math.floor(start + (end-start)/2);

    [A[pivotIndex], A[start]] = [A[start], A[pivotIndex]];

    let pivot = A[start];
    let smaller = start;

    for(let bigger=start+1; bigger <= end; bigger++) {
        if(A[bigger] <= pivot) {
            smaller++
            [A[bigger], A[smaller]] = [A[smaller], A[bigger]];
        }
    }
    [A[smaller], A[start]] = [A[start], A[smaller]];

    quickSortHelper(A, start, smaller-1);
    quickSortHelper(A, smaller+1, end);
}

console.log(quickSort([5,2,1,8,4,7,6,3]));
console.log(quickSort([4,8,1,5,9,0,8,2,-9,100,-337,2,3,9]));