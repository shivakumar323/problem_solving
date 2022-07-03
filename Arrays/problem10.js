// Find maximum difference between two array elements 

/*
Given an array of integers, find maximum difference between two
elements such that larger number appears after the small number

Example 1: 
arr = [2, 5, 15, 6, 4]
output: 13

Example 2:
arr = [7, 9, 5, 6, 13, 2]
output: 8 

*/

function max_diff(arr) {
    let maxDiff = arr[1] - arr[0];
    let minEle = arr[0];

    for(let i = 1; i < arr.length; i++) {

        if(arr[i] - minEle > maxDiff) {
            maxDiff = arr[i] - minEle;
        }

        if(arr[i] < minEle) {
            minEle = arr[i];
        }
    }
    console.log(maxDiff);
}

let arr = [7, 9, 5, 6, 13, 2];
max_diff(arr);

// output: 8