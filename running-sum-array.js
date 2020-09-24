// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6

//Answer 1
const runningSum = (nums) => {
    //The starting point [0] should be the same in both arrays
    const sumArr = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        //Add the item at the current index of the ORIGINAL array
        //to the item at the previous index of the RESULT array
        sumArr.push(nums[i] + sumArr[i-1]);
    }
    return sumArr;
}


// THIS IS FASTER because it avoids looping through both arrays
const runningSum = (nums) => {
    //The starting point [0] should be the same in both arrays
    const sumArr = [nums[0]];
    
    let prevSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        let newSum = nums[i] + prevSum;
        sumArr.push(newSum);
        prevSum = newSum;
    }
    return sumArr;
}

//THIS IS EVEN FASTER because it only involves one array
const runningSum = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i-1];
    }
    return nums;
}