// Merge two Sorted Arrays Without Extra Space

/*

Problem statement: Given two sorted arrays arr1[] and arr2[] of sizes n and m 
in non-decreasing order. Merge them in sorted order. 
Modify arr1 so that it contains the first N elements 
and modify arr2 so that it contains the last M elements.


Approach1: 
Intuition: We can think of Iterating in arr1 and whenever we encounter an element 
that is greater than the first element of arr2, just swap it. 
Now rearrange the arr2 in a sorted manner, 
after completion of the loop we will get elements of both the arrays 
in non-decreasing order

code: 

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];

function merge_arrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    while(i < arr1.length) {
        if(arr1[i] > arr2[0]) {
            swap(arr1, arr2, i, 0);
            arr2.sort((a, b) => a - b);
        }
        i++;
    }
    console.log(arr1);
    console.log(arr2);
}

function swap(arr1, arr2, i, j) {
    let temp = arr1[i];
    arr1[i] = arr2[j];
    arr2[j] = temp;
}

merge_arrays(arr1, arr2);

output: 
[ 1, 2, 3, 4 ]
[ 8, 9, 10 ]

Time complexity: O(n*m)

Space Complexity: O(1) 

solution 2: Gap Alogorithm

let gap = (M + N) / 2 where M = size of arr1 and N = size of arr2
if M + N = odd number then 
gap = ceil((M + N)/2)



*/

let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];

function merge_arrays(arr1, arr2) {
    let l1 = arr1.length;
    let l2 = arr2.length;
    let gap = Math.ceil((l1 + l2) / 2);
    
    while(gap >= 1) {
        let i1 = 0;
        let i2 = gap;

        while(i2 < (l1 + l2)) {
            if(i1 < l1 && i2 < l1) {
                if(arr1[i1] > arr1[i2]) {
                    swap(arr1, i1, i2);
                } 
            } else if(i1 < l1 && i2 >= l1) {
                if(arr1[i1] > arr2[i2 - l1]) {
                    swap1(arr1, arr2, i1, i2 - l1);
                }
            } else if(i1 >= l1 && i2 >= l1) {
                if(arr2[i1 - l1] > arr2[i2 - l1]) {
                    swap(arr2, i1 - l1, i2 - l1);
                }
            }
            i1++;
            i2++;
            
        }
        gap = Math.floor((gap / 2));
        
    }
    console.log(arr1);
    console.log(arr2);
    return arr1.concat(arr2);
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function swap1(arr1, arr2, a, b) {
    let temp = arr1[a];
    arr1[a] = arr2[b];
    arr2[b] = temp;
}


console.log(merge_arrays(arr1, arr2));

/*
output: 
[ 1, 2, 3, 4 ]
[ 8, 9, 10 ]

Time complexity: O(logn)

Space Complexity: O(1)


*/