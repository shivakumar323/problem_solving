// Find the repeating and missing numbers

/*
Problem Statement: You are given a read-only array of N integers with values 
also in the range [1, N] both inclusive. Each integer appears exactly once 
except A which appears twice and B which is missing. 
The task is to find the repeating and missing numbers A and B where 
A repeats twice and B is missing.

Example 1:

Input Format:  array[] = {3,1,2,5,3}

Result: {3,4)

Explanation: A = 3 , B = 4 
Since 3 is appearing twice and 4 is missing

Example 2:

Input Format: array[] = {3,1,2,5,4,6,7,5}

Result: {5,8)

Explanation: A = 5 , B = 8 
Since 5 is appearing twice and 8 is missing

Solution 1: Using Count Sort

Intuition + Approach: 

Since the numbers are from 1 to N in the array arr[]

Take a substitute array of size N+1 and initalize it with 0.
Traverse the given array and increase the value of substitute[arr[i]] by one .
Then again traverse the substitute array starting from index 1 to N.
If you find any index value greater than 1 that is repeating element A.

If you find any index value = 0 then that is the missing element B.

code: 

function f(arr) {
    let arr1 = Array(arr.length + 1).fill(0);
    for(let i = 0; i < arr.length; i++) {
        arr1[arr[i]] += 1;
    }
    
    let A = [];

    for(let i = 1; i < arr1.length; i++) {
        if(arr1[i] == 2) {
            A.push(i);
        } else if(arr1[i] == 0) {
            A.push(i);
        }
    }

    return A;
}

let arr = [3, 1, 2, 5, 3];
console.log(f(arr));

output: [ 3, 4 ]

Time Complexity: O(N)

Space Complexity: O(N) As we are making new substitute array


Solution 2: Using Maths 

Intuition + Approach: 

The idea is to convert the given problem into mathematical equations. 
Since we have two variables where one is missing and one is repeating, 
can we form two linear equations and then solve for the values of these two variables 
using the equations?

Let’s see how.

Assume the missing number to be X and the repeating one to be Y.

Now since the numbers are from 1 to N in the array arr[]. 
Let’s calculate sum of all integers from 1 to N and sum of squares of all integers 
from 1 to N. These can easily be done using mathematical formulae.

Therefore,

Sum of all elements from 1 to N:

S = N*(N+1)/2 ---- equation 1

And, Sum of squares of all elements from 1 to N:

P = N(N+1)(2N+1)/6. ----- equation 2

Similarly, find the sum of all elements of the array and sum of squares of all 
elements of the array respectively.

s1 = Sum of all elements of the array. —– equation 3

P1 = Sum of squares of all elements of the array. ——– equation 4

Now, if we subtract the sum of all elements of array from sum of all elements from 1 to N,
that should give us the value for (X – Y).

Therefore,

(X-Y) = s – s1 = s’

Similarily,

X^2 – Y^2 = P – P1 = P’

or, (X + Y)(X – Y) = P’

or, (X + Y)*s’ = P’

or, X + Y = P’/s’

Great,

we have the two equations we needed:

(X – Y) = s’

(X + Y) = P’/s’

We can use the two equations to solve and find values for X and Y respectively.

Code: 




*/
function f(arr) {
    let len = arr.length;
    let S = (len * (len + 1)) / 2; 
    let P = (len * (len + 1) * (2 * len + 1)) / 6; 

    for(let i = 0; i < len; i++) {
        S -= arr[i];
        P -= arr[i] * arr[i];
    }

    let missingNumber = (S + P/S) / 2;

    let repeatingNumber = missingNumber - S;

    let ans = [];

    ans.push(repeatingNumber);
    ans.push(missingNumber);

    return ans;
}

let arr = [3, 1, 2, 5, 3];
console.log(f(arr));

//output: [ 3, 4 ]
//Time Complexity: O(N) 

//Space Complexity: O(1) As we are NOT USING EXTRA SPACE


