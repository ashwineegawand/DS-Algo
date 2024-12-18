
//selection Sort -> start placing minimum element from left
//T(N) = O(N^2)
//NOT stable
//In place
//Time Limit Exceeded
 function selectionSort(nums) {
    for (let i=0; i<nums.length; i++) {
        let minIndex = i;
        for(let j=i+1; j<nums.length; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j
            }
        }
        //swap
        [nums[i],nums[minIndex]] = [nums[minIndex], nums[i]];
    }
    return nums;
};

console.log(selectionSort([4,6,8,9,2,1,2,2,2,20]));