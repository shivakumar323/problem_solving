// Majority element - Moore's voting algorithm
//Find the Majority Element that occurs more than N/2 times

/*

Problem Statement: Given an array of N integers, write a program to return an element 
that occurs more than N/2 times in the given array. 
You may consider that such an element always exists in the array.

Example 1:

Input Format: N = 3, nums[] = {3,2,3}

Result: 3

Explanation: When we just count the occurrences of each number and compare 
with half of the size of the array, you will get 3 for the above solution. 

nums=  [3, 2, 3]
N = 3 so N/2 = 1(floor value is taken)

Example 2:

Input Format:  N = 7, nums[] = {2,2,1,1,1,2,2}

Result: 2

Explanation: After counting the number of times each element appears 
and comparing it with half of array size, we get 2 as result.

solution : 
Intuition: Use a better data structure to reduce the number of look-up operations 
and hence the time complexity. Moreover, we have been calculating the 
count of the same element again and again – so we have to reduce that also.

Approach: 

Use a hashmap and store as (key, value) pairs. 
(Can also use frequency array based on the size of nums) 
Here the key will be the element of the array and the value will be 
the number of times it occurs. 
Traverse the array and update the value of the key. 
Simultaneously check if the value is greater than the floor of N/2. 
If yes, return the key 
Else iterate forward.
Time Complexity: O(N)-> Frequency array or O(N log N) -> HashMap 

Space Complexity: O(N)

Solution 2: Optimal

Moore's voting algorithm

Intuition: The question clearly states that the nums array has a majority element. 
Since it has a majority element we can say definitely the count is more than N/2.

Majority element count = N/2 + x;

Minority/Other elements = N/2 – x;

Where x is the number of times it occurs after reaching the minimum value N/2.

Now, we can say that count of minority elements and majority elements are equal 
up to a certain point of time in the array. 
So when we traverse through the array we try to keep track of the count of elements 
and which element we are tracking. 
Since the majority element appears more than N/2 times, 
we can say that at some point in array traversal we find the majority element. 

Approach: 

1. Initialize 2 variables:
    Count –  for tracking the count of element
    Element – for which element we are counting

2. Traverse through nums array
    1. If Count is 0 then initialize the current traversing integer of array as Element 
    2. If the traversing integer of array and Element are same increase Count by 1
    3. If they are different decrease Count by 1

3. The integer present in Element is the result we are expecting 

code:

*/
function f(nums) {
    let count = 0;
    let candidate = 0;

    for(let num of nums) {
        if(count == 0) candidate = num;

        if(num == candidate) count++;
        else count--;
    }
    return candidate;
}

let nums = [1, 2, 1];
console.log(f(nums));

//output: 1

//Time Complexity: O(N)

//Space Complexity: O(1)


