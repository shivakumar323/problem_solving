// Kaden's algorithm - Maximum subarray sum in an array

/*
Problem Statement: Given an integer array arr, 
find the contiguous subarray (containing at least one number) 
which has the largest sum and return its sum 
and print the subarray.



*/

function kadens(arr) {
    let max_sum = arr[0];
    let sum = arr[0];
    let arr1 = [arr[0]];

    for(let i = 1; i < arr.length; i++) {
        if(sum < 0) {
            sum = arr[i];
            arr1 = [];
            arr1.push(arr[i]);
        } else {
            sum += arr[i];
            arr1.push(arr[i]);
        }
        max_sum = Math.max(max_sum, sum);
    }
    return max_sum;
}