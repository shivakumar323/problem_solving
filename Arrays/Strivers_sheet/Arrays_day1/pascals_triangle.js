// Program to generate pascal's triangle

/*
Problem Statement: Given an integer N, return the first N rows of Pascal’s triangle.

In Pascal’s triangle, 
each number is the sum of the two numbers directly above it
as shown in the figure below:
    1
   1 1 
  1 2 1
 1 3 3 1
1 4 6 4 1


Example 1:

Input Format: N = 5

Result:
    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

Explanation: There are 5 rows in the output matrix. Each row corresponds to each one of the rows in the image shown above.

Example 2:

Input Format: N = 1

Result: 
    1

Solution: 

Solution 1:

Intuition: When you see the image above, 
you get a pretty good idea of what you are supposed to do here. 
Think about the image as a matrix now where each line is basically
 a row in the matrix. So, first things first, 
 if you are at the edge of the matrix, the value is 1, 
 that’s for sure. Now, what about the inner elements? 
 Well, any inner element is obtained 
 by doing the sum of the 2 values present in the row just above it, 
 i.e., if the element is at index (i, j), 
 then matrix[i][j] can be obtained by doing 
 matrix[i – 1][j – 1] + matrix[i – 1][j].

Approach: To solve the problem, we need to first create 
an array of size N or numRows (input value). 
This array is used to store each of the rows expected in the output, 
so, for example, array[1] = [1,1]. 
In this array, the number of columns (say, numCols) is 
equal to the number of the i-th row + 1 (Since, 0-indexed), 
i.e., for 0-th row, numCols = 1. So, 
the number of columns is different for each row.

Next, we need to run a loop from i = 0 to numRows – 1 (inclusive)
in order to store each row in our array. 
For each of iteration of this loop, we follow the below steps:

1. Create an array of size (i + 1) 
(For some languages such as C++, you need to create a 2D array at the start of the program and resize array[i] to (i + 1)).
2. Set the first and last value of array[i] to 1.
3. Run another loop from j = 1 to i – 1 (inclusive) 
and for each iteration put 
array[i][j] = array[i – 1][j – 1] + array[i – 1][j].

After iterating numRows times, you return the array


Code: 

*/

function pascals_triangle(n) {
    result = [];
    let pre;

    for(let i = 0; i < n; i++) {
        let row = [];
        for(let j = 0; j <= i; j++) {
            if(j == 0 || j == i) {
                row.push(1);
            } else {
                row.push(pre[j - 1] + pre[j]);
            }
        }
        pre = row;
        result.push(row);
    }
    return result;
}

console.log(pascals_triangle(6));

/*
output: 

[
  [ 1 ],
  [ 1, 1 ],
  [ 1, 2, 1 ],
  [ 1, 3, 3, 1 ],
  [ 1, 4, 6, 4, 1 ],
  [ 1, 5, 10, 10, 5, 1 ]
]


*/