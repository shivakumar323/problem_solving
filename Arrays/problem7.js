// Two sum problem - Find pair in array with given sum

/*
Given an array of integers, return indices of the two numbers 
such that they add up to a specific target 

You may assume that each input would have exactly one solution
and you may not use the same element twice.

Example: 
Given input: [2, 7, 11, 15]
target = 18

input[1] + input[2] = 7 + 11 = 18

return [1, 2]

*/

function f(arr, sum) {
    let obj = {};

    for(let i = 0; i < arr.length; i++) {
        obj[arr[i]] = i;
    }

    for(let i = 0; i < arr.length; i++) {
        let numToFind = sum - arr[i];
        if((numToFind in obj) && (obj[numToFind] != i)) {
            let x = "[ " + obj[numToFind] + ", " + i + " ]";
            return (x);
        }
    }
}

let arr = [3, 2, 4];
console.log(f(arr, 6));

//output: [ 2, 1 ]