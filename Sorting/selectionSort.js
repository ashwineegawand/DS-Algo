function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i+1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

console.log(selectionSort([4,6,8,9,2,1,2,2,2,20]));

function selectionSort1(arr) {
    for(let i=0; i<arr.length; i++) {
        let min = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        [arr[min], arr[i]] = [arr[i], arr[min]]
    }
    return arr;
}

console.log(selectionSort1([4,6,8,9,2,1,2,2,2,20]));