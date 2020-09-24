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

public class Solution {
    public int[] RunningSum(int[] nums) 
    {
        
        for (int i = 1; i < nums.Length; i++) {
            nums[i] += nums[i-1];
        }
        return nums;
    }

    //INTERESTING! In JS, storing the sums in a second array takes more time.
    //In C#, storing values in the second array took less time!
    //This is faster:
    
    public int[] RunningSum(int[] nums) 
    {
	    int[] newArr= new int[nums.Length];
        int sum = 0;
	    for (int i = 0; i < nums.Length; i++)
	    {
		    sum += nums[i];
		    newArr[i] = sum;
	    }

	    return newArr;
    }
}