// Sort an array of 0's 1's and 2's

/*
Problem Statement: Given an array consisting of only 0s, 1s and 2s.
Write a program to in-place sort the array without using 
inbuilt sort functions. 
( Expected: Single pass-O(N) and constant space)

Approach: 

1. Initialize the 3 pointers such that low and mid will point 
to 0th index and high pointer will point to last index

int low = arr[0]

int mid = arr[0]

int high = arr[n – 1]

2. Now there will 3 different operations / steps 
based on the value of arr[mid] and will be repeated 
until mid <= high

    1. arr[mid] == 0:
       swap(arr[low], arr[mid])
       low++, mid++

    2. arr[mid] == 1:
       mid++

    3. arr[mid] == 2:
       swap(arr[mid], arr[high])
       high–;
    
The array formed after these steps will be a sorted array.

Code: 

*/

function sort_array(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while(mid <= high) {
        if(arr[mid] == 0) {
            swap(arr, low++, mid++);
        } else if(arr[mid == 1]) {
            mid++;
        } else {
            swap(arr, mid, high--);
        }
    }

    return arr;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = [2,0,2,1,1,0];

console.log(sort_array(arr));

// output: [ 0, 0, 1, 1, 2, 2 ]

/*
Time Complexity: O(N)

Space Complexity: O(1)

*/