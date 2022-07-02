// Print duplicate elements in Array

/*
Input : [1, 5, 4, 2, 1, 4, 7]
output: [1, 4]
*/

let arr = [1, 5, 4, 2, 1, 4, 7];
let isDuplicateExist = false;
let arr1 = [];
let dup_arr = [];
for(let i = 0; i < arr.length; i++) {
    if(arr1.includes(arr[i])) {
        isDuplicateExist = true;
        dup_arr.push(arr[i]);
    } else {
        arr1.push(arr[i]);
    }
}
if(!isDuplicateExist) {
    console.log(-1);
} else {
    console.log(dup_arr);
}

/*
output: 
[ 1, 4 ]
*/