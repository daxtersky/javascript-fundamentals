// ! https://nick.scialli.me/exploring-the-two-sum-interview-question-in-javascript/

// You are asked to create a function that takes two parameters.
// The first parameter, nums, is an array of numbers.
// The second parameter, total is a single number.
// The output of the function should be a two-element array that represents a pair of numbers
// in nums that add up to total.

/**
 * @param {number[]} nums
 * @param {number} total
 * @return {number[]}
 */

// input: nums = [1, 2, 3], total = 4 // output: [1, 3]
// input: nums = [3, 9, 12, 20], total = 21 // output: [9, 12]

const twoSum = (nums: number[], total: number): [number, number] => {
  let twoNums: [number, number];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] + nums[j] === total) {
          twoNums = [nums[i], nums[j]];
          console.log('twoNums:', twoNums);
          return twoNums;
        }
      }
    }
  }
};

twoSum([1,2,3], 4);
twoSum([3, 9, 12, 20], 21);
