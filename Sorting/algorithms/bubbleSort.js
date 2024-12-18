//T(N) = O(N^2) - scan for smallest element from right and bubble it to left
//stable
//In place
//Time Limit Exceeded
function bubbleSort(nums) {
    for(let i=0; i<nums.length; i++) {
        //scan for smallest element from right and bubble it to left
        for(let j=nums.length-1; j>i; j--) {
            if(nums[j] < nums[j-1]) {
                //swap
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            }
        }
    }
    return nums;
};

console.log(bubbleSort([8,12,29,-3,37,45,88,2]));
console.log(bubbleSort([1,2,-3,5,0]));