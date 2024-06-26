function bubbleSort(arr) {
    for(let i=arr.length; i>0; i--) {
        for(let j=0; j<i-1; j++) {
            if(arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([8,12,29,-3,37,45,88,2]));
console.log(bubbleSort([1,2,-3,5,0]));

function bubbleSort1(arr) {
    for(let i=arr.length-1; i>0; i--) {
        for(let j=0; j<i; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

console.log(bubbleSort1([8,12,29,-3,37,45,88,2]));
console.log(bubbleSort1([1,2,-3,5,0]));