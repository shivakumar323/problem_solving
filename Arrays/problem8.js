// Merge two sorted arrays

/*
Given two sorted arrays, write a code 
to merge them in a sorted manner

Example: 
arr1 = [1, 5, 6, 7]
arr2 = [2, 5, 8, 9, 11]

output: [1, 2, 5, 5, 6, 8, 9, 11]


*/

function merge_arrays(arr1, arr2) {
    let len1 = arr1.length;
    let len2 = arr2.length;

    let result = [];

    let i = 0; 
    let j = 0;
    let k = 0;

    while(i < len1 && j < len2) {
        if(arr1[i] < arr2[j]) {
            result[k++] = arr1[i++];
        } else {
            result[k++] = arr2[j++];
        }
    }

    while(i < len1) {
        result[k++] = arr1[i++];
    }

    while(j < len2) {
        result[k++] = arr2[j++];
    }

    console.log(result);
}

let arr1 = [1, 5, 6, 7];
let arr2 = [2, 5, 8, 9, 11];

merge_arrays(arr1, arr2);
