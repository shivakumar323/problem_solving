var topKfrequent = function(arr, k) {
    let res = [];
    let map = new Map();
    let bucket = new Array(arr.length + 1);

    for(let n of arr) {
        map.set(n, (map.has(n) ? 1 + map.get(n) : 1));
    }

    for(let [key, value] of map.entries()) {
        if(!Array.isArray(bucket[value])) {
            bucket[value] = [];
        }
        bucket[value].push(key);
    }

    for(let j = bucket.length - 1; j >= 0; j--) {
        if(Array.isArray(bucket[j])) {
            for(let n of bucket[j]) {
                res.push(n);
                if(res.length === k) {
                    return res;
                }
            }
        }
    }
}

let arr = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4];

console.log(topKfrequent(arr, 2));
