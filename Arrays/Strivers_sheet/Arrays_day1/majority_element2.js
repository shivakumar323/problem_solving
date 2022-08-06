// Majority Elements(>N/3 times) 
//Find the elements that appears more than N/3 times in the array

/*

Problem Statement: Given an array of N integers. 
Find the elements that appear more than N/3 times in the array. 
If no such element exists, return an empty array.

Example 1:

Input: N = 5, array[] = {1,2,2,3,2}

Ouput: 2

Explanation: Here we can see that the Count(1) = 1, Count(2) = 3 and Count(3) = 1.Therefore, the count of 2 is greater than N/3 times. Hence, 2 is the answer.

solution 1: using map for storing each unique value of an array as key and 
frequency of each element as value of a map

solution 2: Optimal Solution (Extended Boyer Moore’s Voting Algorithm)

Approach + Intuition: In our code, we start with declaring a few variables:

num1 and num2 will store our currently most frequent and second most frequent element
c1 and c2 will store their frequency relatively to other numbers.

We are sure that there will be a max of 2 elements which occurs > N/3 times 
because there cannot be if you do a simple math addition.

Let, ele be the element present in the array at any index. 

if ele == num1, so we increment c1.
if ele == num2, so we increment c2.
if c1 is 0, so we assign num1 = ele.
if c2 is 0, so we assign num2 = ele.
In all the other cases we decrease both c1 and c2.

In the last step, we will run a loop to check if num1 or nums2 are the majority 
elements or not by running a for loop check.

code:

*/

function f(arr) {
    let num1, num2, count1 = 0, count2 = 0, ans = [];

    for(let num of arr) {
        if(num == num1) count1++;
        else if(num == num2) count2++;
        else if(count1 == 0) {
            num1 = num;
            count1 = 1;
        }
        else if(count2 == 0) {
            num2 = num;
            count2 = 1;
        }
        else {
            count1--;
            count2--;
        }
    }

    count1 = 0, count2 = 0;

    for(let num of arr) {
        if(num == num1) count1++;
        else if(num == num2) count2++
    }
    if(count1 > arr.length/3) ans.push(num1);
    if(count2 > arr.length/3) ans.push(num2);

    return ans;
}

let arr = [1, 2, 2, 3, 2];
console.log(f(arr));

let arr1 = [11,33,33,11,33,11];
console.log(f(arr1));

/*
output: 
[ 2 ]
[ 11, 33 ]

Time Complexity: O(n)

Space Complexity: O(1)


*/


