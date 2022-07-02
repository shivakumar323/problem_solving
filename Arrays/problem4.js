// Segregate 0's and 1's in an array

/*
Given an array of 0's and 1's in random order write a code 
to segregate 0's on left side and 1's on right side of the array

input_array = [0, 1, 0, 1, 0, 0, 1]
output_array = [0, 0, 0, 0, 1, 1, 1]

Approach: 
Traverse an array we first move 0's on left side and then
move 1's on right side in a single traversal

*/

function segregate(arr) {
    let j = -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            j += 1;
            arr[j] = 0;
        }
    }
    j += 1;
    while(j < arr.length) {
        arr[j] = 1;
        j += 1;
    }

    console.log(arr);
}

let A = [0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0];

segregate(A);

/*
output: 
[
  0, 0, 0, 0, 0,
  0, 1, 1, 1, 1,
  1
]

*/

// time complexity - O(N)