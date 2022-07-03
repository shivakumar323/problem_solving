// Maximum subarray sum

/*
Given an integer array, find the contiguous subarray(containing at least one number)
which has the largest sum and return its sum

What is subarray?

A subarray is an array that is inside another array. It should be contiguous

Example 1 : 
arr = [1, 2, -5, 4, 3, 8, 5]

Result: 20
The subarray is [4, 3, 8, 5]

Example 2: 
arr = [-2, -1]

Result: -1
The subarray is [-1]

*/

function max_subarray_sum(arr) {
    let sum = arr[0];
    let max_sum = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(sum < 0) {
            sum = arr[i];
        } else {
            sum += arr[i];
        }
        max_sum = Math.max(max_sum, sum);
    }
    return max_sum;
}

let arr = [1, 2, -5, 4, 3, 8, 5];

console.log(max_subarray_sum(arr));

/*
output: 20

this algorithm is called kaden's algorithm

time complexity - O(N)
*/