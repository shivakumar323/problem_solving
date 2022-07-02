// Remove duplicate elements from unsorted array

const { arrayBuffer } = require("stream/consumers");

/*
Input: [5, 1, 2, 6, 4, 4, 5]

Output: [5, 1, 2, 6, 4] 

There are two approaches for this problem.
1. by sorting the array first and then checking if consecutive
elements are same in array

2. maintain a key value pair for unique elements in an array
i.e., for each unique element in an array should have a key
we will run a for loop and check if a key with the name as element in a loop exists 
in an object, if exists then increment its corresponding value in key value pair
else create a key value pair inside the object with key name as element in for loop and 
value = 1
and finally print all the keys(keys here are distinct elements of an array)

the reason behind choosing the 2nd approach is it reduces the time complexity from 
O(nlogn) of 1st approach to O(n)
and object in js holds unique keys(consider using this ds while solving the problems)


3. You can also use set ds to store each element in array, since it accepts unique elements
only unique elemets will be stored inside the set

in below code we have followed 2nd approach you can also go for 3rd approach since js 
also has set ds
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
*/

function remove_duplicates(arr) {
    let obj = {};

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] in obj) {
            obj[arr[i]] += 1;
        } else {
            obj[arr[i]] = 1;
        }
    }

    console.log(Object.keys(obj));
}

let arr = [5, 1, 2, 6, 4, 4, 5];

remove_duplicates(arr);