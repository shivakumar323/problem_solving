// Find a peak element in an array

/*
Given an array of integers, find a peak element.
the array may contain in that case return any one peak element

Peak element - An element which is greater than it's neighbours

Example 1: 
Input: [2, 3, 4, 7, 5]
output: 7

Example 2: 
Input: [8, 7, 6, 5, 4]
output: 8
An array is strictly decreasing so in that case first element is peak element

Example 3: 
Input: [2, 3, 4, 5, 6]
output: 6
An array is strictly increasing so in that case last element is peak element

*/

/*Apporach 1:  Traversing the array 

Time complexity - O(N)

function f(arr) {
    let result = [];
    for(let i = 1; i < arr.length - 2; i++) {
        if(arr[i] > arr[i - 1] && arr[i] > arr[i + 1] ) {
            result.push(arr[i]);
        }
    }
    if(arr[0] > arr[1]) {
        result.push(arr[0]);
    }
    if(arr[arr.length - 1] > arr[arr.length - 2]) {
        result.push(arr[arr.length - 1]);
    }
    return result;
}

let arr = [1, 3, 2, 5, 3, 7];
console.log(f(arr));

output: [ 3, 5, 7 ]

*/

/*
The above approach approach 1 can me optimized from O(N) to log(N)
using binary search
Approach 2 using binary search:
*/

function findPeak(arr) {
    let n = arr.length;

    let start = 0;
    let end = n - 1;

    let result = [];

    while( start <= end) {
        let mid = parseInt((start + end) / 2);

        if((mid == 0 || arr[mid - 1] <= arr[mid]) && (mid == n - 1 || arr[mid + 1] <= arr[mid])) {
            //result.push(arr[mid]); // we can only find one peak element using binary search
            return arr[mid];
        }
        else if(mid > 0 && arr[mid - 1] > arr[mid]) {
            end = mid - 1;
        }
        else {
            start = mid + 1;
        }
    }

    return -1;
}

let arr = [1, 3, 2, 5, 3, 7];
console.log(findPeak(arr));

// output: 3