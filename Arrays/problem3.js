// How to find common elements in 3 sorted arrays

/*
Input - 

arr1 = [1,5,10,20,40,80]
arr2 = [6,7,20,80,100]
arr3 = [3,4,15,20,30,70,80,120]

output: 
[20, 80]


*/

function find_common(arr1, arr2, arr3) {
    let x = 0; 
    let y = 0; 
    let z = 0;

    while(x < arr1.length && y < arr2.length && z < arr3.length) {
        if(arr1[x] === arr2[y] && arr2[y] === arr3[z]) {
            console.log(arr1[x]);
            x++;
            y++;
            z++;
        } else if(arr1[x] > arr2[y]) {
            y++;
        } else if(arr2[y] > arr3[z]) {
            z++;
        } else {
            x++;
        }
    }
}

let arr_1 = [1, 5, 10, 20, 40, 80];
let arr_2 = [6, 7, 20, 80, 100];
let arr_3 = [3, 4, 15, 20, 30, 70, 80, 120];

find_common(arr_1, arr_2, arr_3);

/*
output: 
20
80
*/

// time complexity - O(N)
