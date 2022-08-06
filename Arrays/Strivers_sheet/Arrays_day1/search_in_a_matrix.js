// Search in a sorted 2D matrix

/*

Problem Statement: Given an m*n 2D matrix and an integer, 
write a program to find if the given integer exists in the matrix.

Given matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row

Example 1:

Input: matrix = 
[[1,3,5,7],
 [10,11,16,20],
 [23,30,34,60]], 

target = 3

Output: true

Explanation: As the given integer(target) exists in the given 2D matrix, 
the function has returned true.

Solution 1: Naive approach

Approach: We can traverse through every element that is present in the matrix 
and return true if we found any element in the matrix is equal to the target integer. 
If the traversal is finished we can directly return false 
as we did not find any element in the matrix to be equal to the target integer.

Time complexity: O(m*n)

Space complexity: O(1)

Solution 2: [Efficient] – Binary search

Intuition: As it is clearly mentioned that the given matrix will be row-wise 
and column-wise sorted, we can see that the elements in the matrix will be 
in a monotonically increasing order. So we can apply binary search to search the matrix. 
Consider the 2D matrix as a 1D matrix having indices from 0 to (m*n)-1 and 
apply binary search

*/

function f(arr, target) {
    arr = arr.flat();
    let start = 0;
    let end = arr.length - 1;
    let mid = parseInt((start + end)/ 2);
    console.log(end);
    console.log(mid);
    while(start <= end) {
        console.log(start);
        console.log(end);
        console.log(mid);
        if(arr[mid] == target) {
            return true;
        }
        else if(arr[mid] < target) {
            start = mid + 1;
        }
        else if(arr[mid] > target) {
            end = mid - 1;
        }
        mid = parseInt((start + end)/ 2);
    }
    return false;
}
let arr = [[1,3,5,7],
[10,11,16,20],
[23,30,34,60]];

console.log(f(arr, 3));