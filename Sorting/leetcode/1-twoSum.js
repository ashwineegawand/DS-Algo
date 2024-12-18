// https://leetcode.com/problems/two-sum/description/
//Brute force
//Time => O(n^2)
//Space => O(1)
function twoSumBrureForce(nums, target) {
    for(let i=0; i<nums.length; i++) {//0
        for(let j=i+1; j<nums.length; j++) {//1
            if(nums[i] + nums[j] === target) {//2+7===9
                return [i, j];
            }
        }
    }
    return [-1, -1];
}

console.log(twoSumBrureForce([2,7,11,15], 9));
console.log(twoSumBrureForce([3,2,4], 6));

//two way to solve
// 1) Sort and binarySearch: Time = O(N log N)   Space -> O(1) - no Aux space
//    - sort the array => O(N log N)
//    - Take first element (num1), and search for other number, i.e. ( target - num1 ) binary search : O (log N)
//    - Do this for N elements : O(N log N)
//    => overall O(N log N) + O(N log N) => O(N log N)
function twoSumSort (nums, target) {
    quickSort(nums, 0, nums.length-1)
    
}

function quickSort(A, start, end) {
    if(start >= end) return;

    let pivotIndex = Math.floor(start + ((end-start)/2));
    [A[start], A[pivotIndex]] = [A[pivotIndex], A[start]];

    let pivot = nums[start];
    let smaller = start;

    for(let bigger=smaller+1; bigger<=end; bigger++) {
        if(A[bigger] < pivot) {
            smaller++;
            [A[smaller], A[bigger]] = [A[bigger], A[smaller]];
        }
    }
    [A[smaller], A[start]] = [A[start], A[smaller]];
    quickSort(A, start, smaller-1);
    quickSort(A, smaller+1, end);
}

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let index = Math.floor(left + ((right-left)/2));

    while(left <= right && nums[index] !== target) {
        if(nums[index] > target) {
            left = index+1;
        } else {
            x
        }
    }
}

// 2) using Has table 
//    time => building Hash table O(N) + retrieving from Hash table O(1) => O(N)
//    space => O(N) -> need aux space for hash table
function twoSumHashTable(nums, target) {
    let obj = {};
    for(let i=0; i<nums.length; i++) {
        if(nums[i] in obj) {
            return [obj[nums[i]], i]
        } else {
            obj[target - nums[i]] = i;
        }
    }
    return [-1,-1];
}

// console.log(twoSumHashTable([2,7,11,15], 9));
// console.log(twoSumHashTable([3,2,4], 6));
// console.log(twoSumHashTable([3,3], 6));
// console.log(twoSumHashTable([1,1,1,3,1,2,3,3,3], 6));
// console.log(twoSumHashTable([1,2,1,1,1,1], 6));
// console.log(twoSumHashTable([], 6));
// console.log(twoSumHashTable([], 0));