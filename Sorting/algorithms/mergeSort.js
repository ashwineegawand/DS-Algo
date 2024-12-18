function merge(arr1, arr2) {
    let p1 = 0, p2 = 0;
    let aux = [];

    while(p1 < arr1.length && p2 < arr2.length) {
        if(arr1[p1] < arr2[p2]) {
            aux.push(arr1[p1]);
            p1++;
        } else {
            aux.push(arr2[p2]);
            p2++;
        }
    }

    while(p1 < arr1.length) {
        aux.push(arr1[p1]);
        p1++;
    }

    while(p2 < arr2.length) {
        aux.push(arr2[p2]);
        p2++;
    }

    return aux;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;

    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

console.log(mergeSort([12,45,67,90,2,3,6,9,9,0]));
