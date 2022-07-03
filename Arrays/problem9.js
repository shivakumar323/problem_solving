// Sort an array of 0's, 1's and 2's


/*
Given an array consisting of 0's, 1's and 2's. We have to write 
a code to sort an array

input: [0, 1, 1, 0, 1, 2, 0, 1, 2]
output: [0, 0, 0, 1, 1, 1, 1, 2, 2]

Method 1: Simply sort an array 
For sorting we can use Quicksort, the time complexity will be O(nlogn)

Method 2: Simple counting
Count the number of 0's, 1's and 2's. now we have the count 
we can simply put all 0's first, 1's second and 2's at last
Time complexity of this approach is O(N)



*/

function sort_array(arr) {
    let c1 = 0;
    let c2 = 0; 
    let c3 = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            c1++;
        } else if(arr[i] == 1) {
            c2++;
        } else {
            c3++;
        }
    }
    console.log(c1, c2, c3);
    for(let j = 0; j < c1; j++) {
        arr[j] = 0;
    }
    for(let k = c1; k < (c1 + c2); k++) {
        console.log(k);
        arr[k] = 1;
    }
    for(let l = (c1 + c2); l < arr.length; l++) {
        arr[l] = 2;
    }

    console.log(arr);
} 

let arr = [0, 1, 1, 0, 1, 2, 0, 1, 2];

sort_array(arr);

/*
output: 
[
  0, 0, 0, 1, 1,
  1, 1, 2, 2
]

*/
