function binarySearch(nums, target) {//given array is sorted, find index of target
    let left = 0;
    let right = nums.length - 1;
    let index = Math.floor(left + ((right-left)/2));

    while(left <= right && nums[index] !== target) {
        if(nums[index] > target) {
            right = index - 1;
        } else {
            left = index + 1;
        }
        index = Math.floor(left + ((right-left)/2));
    }

    return (nums[index] === target) ? index : -1;
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73], 7));