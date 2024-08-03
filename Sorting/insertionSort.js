//Insertion Sort 
//Best case => soretd array => O(N)
//worst case => reversly sorted array => O(N^2)
//random array => O(N^2)
//In place
//Stable
//Time Limit Exceeded
function insertionSort(nums) {
    for(let i=0; i<nums.length; i++) {
        //i th iteration keeps [0 - i] array sorted
        //when nums[i] is not at it's right place, insert it wherever it should go
        let curr = nums[i];
        let trackIndex = i-1;
        while(nums[trackIndex] > curr && trackIndex >= 0) {
            nums[trackIndex + 1] = nums[trackIndex];
            trackIndex--;
        }
        nums[trackIndex+1] = curr;
    }
    return nums;
};

console.log(insertionSort([8,2, 4, 9, 3, 6]));


//Practice
function insertionSortSort1(nums) {
    for(let i=0; i<nums.length; i++) {
        while(nums[i-1] > nums[i] && i>0) {
            [nums[i], nums[i-1]] = [nums[i-1], nums[i]];
            i--;
        }
    }

    return nums;
}

console.log(insertionSortSort1([8,2, 4, 9, 3, 6, -2, -2, 8, 1, 10]));