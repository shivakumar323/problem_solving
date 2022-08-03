var merge = function(nums1, m, nums2, n) {
    let l1 = nums1.length;
    let l2 = nums2.length;
    let gap = Math.ceil((l1 + l2) / 2);
    
    while(gap >= 1) {
        let i1 = 0;
        let i2 = gap;

        while(i2 < (l1 + l2)) {
            if(i1 < m && i2 < m) {
                if(nums1[i1] > nums1[i2]) {
                    swap(nums1, i1, i2);
                } 
            } else if(i1 < m && i2 >= m) {
                if(nums1[i1] > nums2[i2 - m]) {
                    swap1(nums1, nums2, i1, i2 - m);
                }
            } else if(i1 >= m && i2 >= m) {
                if(nums2[i1 - m] > nums2[i2 - m]) {
                    swap(nums2, i1 - m, i2 - m);
                }
            }
            i1++;
            i2++;
            
        }
        gap = Math.floor((gap / 2));
        
    }
    nums1 = nums1.splice(0, m);
    console.log(nums1);
    console.log(nums2);
    nums1 = nums1.concat(nums2);
    console.log(nums1);
    return nums1;
}

function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function swap1(arr1, arr2, a, b) {
    let temp = arr1[a];
    arr1[a] = arr2[b];
    arr2[b] = temp;
}

let nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3;
console.log(merge(nums1, m, nums2, n));