//Set Matrix Zeroes

/*

Problem Statement: Given a matrix if an element in the matrix is 0 
then you will have to set its entire column and row to 0 
and then return the matrix.


Examples:

Examples 1:

Input: matrix=[[1,1,1],[1,0,1],[1,1,1]]

Output: [[1,0,1],[0,0,0],[1,0,1]]

Explanation: Since matrix[2][2]=0.
Therfore the 2nd column and 2nd row wil be set to 0.
 
Input: matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]

Output:[[0,0,0,0],[0,4,5,0],[0,3,1,0]]

Explanation:Since matrix[0][0]=0 and matrix[0][3]=0. 
Therefore 1st row, 1st column and 4th column will be set to 0


Solution 1:

Approach: Using brute force

Assuming all the elements in the matrix are non-negative. 
Traverse through the matrix and if you find an element with value 0, 
then change all the elements in its row and column to -1, except when an element is 0. 
The reason for not changing other elements to 0, but -1, 
is because that might affect other columns and rows. 
Now traverse through the matrix again and if an element is -1 change it to 0, 
which will be the answer.


code: 

function setMatrixZeroes(matrix) {
    let rows = matrix.length, columns = matrix[0].length;
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(matrix[i][j] == 0) {
                let ind = i - 1;

                while(ind >= 0) {
                    if(matrix[ind][j] != 0) {
                        matrix[ind][j] = -1;
                    }
                    ind--;
                }

                ind = i + 1;
                while(ind < rows) {
                    if(matrix[ind][j] != 0) {
                        matrix[ind][j] = -1;
                    }
                    ind++;
                }

                ind = j - 1;
                while(ind >= 0) {
                    if(matrix[i][ind] != 0) {
                        matrix[i][ind] = -1;
                    }
                    ind--;
                }

                ind = j + 1;
                while(ind < columns) {
                    if(matrix[i][ind] != 0) {
                        matrix[i][ind] = -1;
                    }
                    ind++;
                }

            }
        }
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(matrix[i][j] == -1) {
                matrix[i][j] = 0;
            }
        }
    }
    
    return matrix;
}

let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
console.log(setMatrixZeroes(matrix));

output: [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]


Time Complexity:O((N*M)*(N + M)). O(N*M) for 
traversing through each element and (N+M)for 
traversing to row and column of elements having value 0.

Space Complexity:O(1)


Solution 2:Better approach

Intuition: Instead of traversing through each row and column, 
we can use dummy arrays to check if the 
particular row or column has an element 0 or not, 
which will improve the time complexity.

Approach:Take two dummy array one of size of row and other of size 
of column.Now traverse through the array.
If matrix[i][j]==0 then 
set dummy1[i]=0(for row) and dummy2[j]=0(for column).
Now traverse through the array again 
and if dummy1[i]==0  || dummy2[j]==0 then arr[i][j]=0,
else continue.

function setMatrixZeroes(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let dummy1 = Array(rows).fill(1);
    let dummy2 = Array(columns).fill(1);
    
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(matrix[i][j] == 0) {
                dummy1[i] = 0;
                dummy2[j] = 0;
            }
        }  
    }

    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < columns; j++) {
            if(dummy1[i] == 0 || dummy2[j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }

    return matrix;
}

let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
console.log(setMatrixZeroes(matrix));


output: [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]

Time Complexity: O(N*M + N*M)

Space Complexity: O(N)



Solution 3:Optimizing the better approach.

Intuition: Instead of taking two dummy arrays 
we can use the first row and column of the matrix for the same work. 
This will help to reduce the space complexity of the problem. 
While traversing for the second time 
the first row and column will be computed first, 
which will affect the values of further elements that’s why 
we traversing in the reverse direction.


Approach:Instead of taking two separate dummy array,
take first row and column of the matrix as the array for 
checking whether the particular column or row has the value 0 or not.
Since matrix[0][0] are overlapping.Therefore take separate variable col0(say) 
to check if the 0th column has 0 or not and 
use matrix[0][0] to check if the 0th row has 0 or not.
Now traverse from last element to the first element and check 
if matrix[i][0]==0 || matrix[0][j]==0 and if true 
set matrix[i][j]=0,else continue.

code: 

*/

function setMatrixZeroes(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let col0 = 1;
    for(let i = 0; i < rows; i++) {
        if(matrix[i][0] == 0) {
            col0 = 0;
        }
        for(let j = 1; j < columns; j++) {
            if(matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    for(let i = rows - 1; i >= 0; i--) {
        for(let j = columns - 1; j >= 1; j--) {
            if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
        if(col0 == 0) {
            matrix[i][0] = 0;
        }
    }

    return matrix;
}

let matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
console.log(setMatrixZeroes(matrix));

//output: [ [ 0, 0, 0, 0 ], [ 0, 4, 5, 0 ], [ 0, 3, 1, 0 ] ]

//Time Complexity: O(2*(N*M)), 
//as we are traversing two times in a matrix,

//Space Complexity: O(1)