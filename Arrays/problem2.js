// Find pairs in array with given sum

/*
Find pairs with given sum in a sorted array

Given an array with A of size of N.
We need to find all pairs that sum to a number equal to K.
If no such pair exists then output will be -1.

Array elements are distinct and in sorted order

for example - 

arr = [1,2,3,4,5,6,7]
sum = 9

output: 
Pair (2,7)
pair (3,6)
pair (4,5)

*/

function find_pair(arr, N, sum) {
    let low = 0;
    let high = N;
    while(low < high) {
        if(arr[low] + arr[high] == sum) {
            console.log("Pair: (", arr[low] + ", " + arr[high] + ")");
            low++;
            high--;
        } else if(arr[low] + arr[high] < sum) {
            low++;
        } else {
            high--;
        }
    }
}


arr = [1,2,3,4,5,6,7]
sum = 9
find_pair(arr, arr.length, sum);

/* Output: 
Pair: ( 2, 7)
Pair: ( 3, 6)
Pair: ( 4, 5)
*/

// time complexity of the above code is O(N)