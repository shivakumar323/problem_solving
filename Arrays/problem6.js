// Find second smallest number in an array

/*
arr = [-1, 7, 1, 34, 18]
second smallest number = 1

Approach: 

Method 1: sort the array and print the element 
which is at index position 1
Time complexity of this approach is O(nlogn)

Method 2: maintain two flags and traverse array
time complexity is: O(N) 

*/

function find_second_smallest(arr) {
    let smallest = Infinity;
    let second_smallest = Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallest) {
            smallest = arr[i];
        } else if(arr[i] > smallest && arr[i] < second_smallest) {
            second_smallest = arr[i];
        }
    }
    console.log(second_smallest);
}

let arr = [-1, 7, 1, 34, 18];

find_second_smallest(arr);

// output: 1

