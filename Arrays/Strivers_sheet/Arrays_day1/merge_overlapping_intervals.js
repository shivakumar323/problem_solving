//Merge Overlapping Sub-intervals

/*

Problem Statement: Given an array of intervals, merge all the
overlapping intervals and return an array of
non-overlapping intervals.

Examples:

Example 1: 

Input: intervals=[[1,3],[2,6],[8,10],[15,18]]

Output: [[1,6],[8,10],[15,18]]

Explanation: Since intervals [1,3] and [2,6] are overlapping 
we can merge them to form [1,6]
 intervals.

Example 2:

Input: [[1,4],[4,5]]

Output: [[1,5]]

Explanation: Since intervals [1,4] and [4,5] are overlapping 
we can merge them to form [1,5].


*/

function f(arr) {
    arr = arr.sort(function(a, b) { // sort function is used to sort the input in ascending order based on first element in each array of input
        // if the first element in the array is same then sorting will be based on 2nd element present in each array of input
        if (a[0] == b[0]) {
            return a[1] - b[1];
        }
        return a[0] - b[0];
    });
    let temp = arr[0];
    let res = [];
    let count = 0;
    console.log(arr);
    for(let pair of arr) {
        if(temp[1] >= pair[0] && temp[1] <= pair[1] || (temp[0] < pair[0] && temp[1] > pair[1])) {
            temp = [temp[0], Math.max(pair[1], temp[1])];
        } else {
            res.push(temp);
            temp = pair;
        }
    }
    res.push(temp);
    return res;
}

let arr = [[1,3],[2,6],[8,10],[15,18]];
console.log(f(arr));
arr = arr.sort(([a, b], [c, d]) => a - c || d - b);
console.log(arr);