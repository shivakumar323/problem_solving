// Find top k most frequent elements 

/*
Given an array of integers, return the k most frequent elements

Example 1: 

Input: [1, 1, 1, 2, 2, 3, 3, 3], k = 2

output: [1, 3]

Example 2: 

Input: [1], k = 1
output: 1

Approach: use object/key value pair to store number and its frequency
in an array
*/


var topKFrequent = function(arr, k) {
    let res = [];
    let map = new Map();
    let bucket = new Array(arr.length + 1);
    
    // storing frequency of numbers in a map
    for(let n of arr) {
        map.set(n, (map.has(n) ? 1 + map.get(n) : 1));
    }
    
    // Poppulate the bucket with numbers in frequency
    // as the index of the bucket
    for(let [key, value] of map) {
        if(!Array.isArray(bucket[value])) {
            bucket[value] = [];
        }
        bucket[value].push(key);
    }

    for(let i = bucket.length - 1; i >= 0; i--) {
        if(Array.isArray(bucket[i])) {
            for(let n of bucket[i]) {
                res.push(n);
                if(res.length === k) {
                    return res;
                }
            }
        }
    }
}

let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4];

console.log(topKFrequent(arr, 3));

// output: [ 3, 1, 2 ]
