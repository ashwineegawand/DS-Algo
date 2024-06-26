//Insertion sort (iterative)
//Best case => soretd array => O(N)
//worst case => reversly sorted array => O(N^2)
//random array => O(N^2)
function insertionSortTest(arr) {
    for(let i=0; i<arr.length; i++) {
        let currVal = arr[i];
        let trackIndex = i-1;
        while(arr[trackIndex] > currVal && trackIndex >= 0) {
            arr[trackIndex + 1] = arr[trackIndex];
            trackIndex --;
        }
        arr[trackIndex+1] = currVal;
    }
    return arr
}
console.log(insertionSortTest([8,2, 4, 9, 3, 6]));


// //recursive approach1
// function insertionSortHelper(array, n) {
//     if(n<=1) return;
//     insertionSortHelper(array, n-1);

//     let last = array[n-1];
//     let j = n-2;
//     while(j>=0 && array[j] > last) {
//         //swap
//         arr[j+1] = arr[j]
//         j = j-1;
//         arr[j+1]=last
//     }
//     return array;
// }

// function insertionSort(arr) {
//     return insertionSortHelper(arr);
// }

// console.log(insertionSortHelper([8,12,29,-3,37,45,88,2]));

//recursive approach 2

//iterative

// def insertionSortRecursive(arr,n):
//     # base case
//     if n<=1:
//         return

//     # Sort first n-1 elements
//     insertionSortRecursive(arr,n-1)
//     last = arr[n-1]
//     j = n-2

//     while (j>=0 and arr[j]>last):
//         arr[j+1] = arr[j]
//         j = j-1
 
//     arr[j+1]=last