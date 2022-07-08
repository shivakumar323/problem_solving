// Maximum of all subarrays of size of size K

/*
Given an array of positive numbers and a positive number k,
find the maximum sum of any subarray of size k

example: 
arr = [2, 1, 5, 1, 3, 2]
k = 3

output: 9
the subarray is [5, 1, 3]

Approach - Sliding window


*/

function f(arr, k) {
    let start = 0;
    let sum = 0;
    let max_sum = 0;

    for(let end = 0; end < arr.length; end++) {
        sum += arr[end];
        arr1.push(arr[end]);

        if(end >= k - 1) {
            max_sum = Math.max(max_sum, sum);
            sum -= arr[start];
            start++;
        }
    }
    console.log(max_sum);
}

let arr = [2, 1, 5, 1, 3, 2];
f(arr, 3);

/*
output: 9

time complexity: O(n)

*/