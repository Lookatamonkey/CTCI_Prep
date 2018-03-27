function mySplit(string, char) {
    let res = [];
    let temp = "";
    for (let i = 0; i < (string.length - char.length) + 1; i++) {
        let sliced = string.slice(i, i + char.length);
        if (char === sliced) {
            res.push(temp);
            res.push("");
        } else {
            temp += string[i];
        }
    }
    return res;
}

// console.log(mySplit("abc", "bc"));

function myJoin(arr, char) {
    let res = "";

    for (let i = 0; i < arr.length; i++) {
        res += (arr[i].toString() + char.toString());
    }

    return res;
}

// console.log(myJoin([1, 2, 3], 1));


function myReverse(string) {
    let res = "";

    for (let i = string.length -1; i >= 0; i--) {
        res += string[i];
    }

    return res;
}

// console.log(myReverse("abc"));

function compressString(string) {
    let res = "";
    let temp = string[0];
    let counter = 1;

    for (let i = 0; i < string.length; i++) {
        if (string[i] === temp) {
            counter += 1;
        } else {
            if (counter === 1) {
                res += temp;
            } else {
                res += (temp + counter);
            }
            temp = string[i];
            counter = 1;
        }
    }

    if (counter === 1) {
        res += temp;
    } else {
        res += (temp + counter);
    }

    return res;
}

// console.log(compressString("aaabbbcccd"));

function digitalRoot(num) {
    let temp = 0;
    while (num > 9) {
        temp += num % 10;
        num = Math.floor(num / 10);
    }

    temp += num;

    if (temp > 9) {
        return digitalRoot(temp);
    } else {
        return temp;
    }

    
}

// console.log(digitalRoot(22));
// console.log(digitalRoot(58));
// console.log(digitalRoot(1));

function sumRec(arr) {
    if (arr.length === 0) return 0;

  return arr[0] + sumRec(arr.slice(1));
}

// console.log(sumRec([1, 2, 3]));

function isPowerOfThree(n) {
    if (n === 1) {
        return true;
    }   
    if (n < 3 && n !== 1) {
        return false;
    }
    
    return isPowerOfThree(n/3);
}

// console.log(isPowerOfThree(27));

function sumTo(n) {
    if (n === 1) { return n; }

    return n + sumTo(n-1);
}

// console.log(sumTo(3));

function addNumbers(arr) {
    if (arr.length === 0 ) { return 0; }

    return arr[0] + addNumbers(arr.slice(1));
}

// console.log(addNumbers([1, 2, 3, 4]));

function iceCreamShop(arr, fav) {
    if (arr.length === 0) { return false; }
    let currentIceCream = arr.shift();
    if (currentIceCream === fav) {
        return true;
    } else {
        return iceCreamShop(arr, fav);
    }

}

// console.log(iceCreamShop(['vanilla', 'strawberry'], 'blue moon')); // => returns false
// console.log(iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea')); // => returns true
// console.log(iceCreamShop(['cookies n cream', 'blue moon', 'superman', 'honey lavender', 'sea salt caramel'], 'pistachio'));  // => returns false
// console.log(iceCreamShop(['moose tracks'], 'moose tracks'));  // => returns true
// console.log(iceCreamShop([], 'honey lavender'));  // => returns false

function bSearch(arr,target) {
    console.log(arr);
    if (arr.length === 0) { return 0; }

    let mid = Math.floor(arr.length / 2);

    
    if (arr[mid] > target) {
        return bSearch(arr.slice(0, mid), target);
    } else if (arr[mid] < target) {
        return bSearch(arr.slice(mid+1, arr.length), target);
    } else {
        return 1;
    }
}

// console.log(bSearch([1, 2, 3, 4, 5, 6], 1));

// Write a method that takes a hash of symbol keys, for which the values are integers representing each key's weight. The method returns a key such that the chances of selecting a particular key are weighted by that key's value.

// For the hash {:a => 1, :b => 2, :c => 3}, the chance of returning :c is 1/2, :b is 1/3, and :a is 1/6.

function weightedKeys(obj) {
    let keys = Object.keys(obj);
    let values = keys.map((key) => obj[key] );
    let total = values.reduce((acc, curr) => acc + curr, 0);
    let store = [0];

    for (let i = 0; i < keys.length; i++) {
        let val = store[store.length - 1] + obj[keys[i]] * (1.0/ total);
        store.push(val);
    }

    let random = Math.random();
    for(let i = 0; i < keys.length; i++) {
        if (random > store[i] && random < store[i + 1]) {
            return keys[i];
        }
    }
}
// console.log(weightedKeys({ "a" : 1, "b" : 2, "c" : 3 }));

function median(arr1, arr2) {
    // HARD LEVEL QUESTION ON LEETCODE
}

// console.log(median([1, 3, 15, 17], [0, 2, 6]) === 3);
// console.log(median([1, 7, 11, 13], [2, 4, 6]) === 6);
// console.log(median([1, 7, 11], [8, 10, 12]) === 10);

function moveZeros(arr) {
    let pointer = 0;
    let current = 1;

    while (current < arr.length) {
        if (arr[current] === 0) {
            let temp = arr[pointer];
            arr[pointer] = arr[current];
            arr[current] = temp;
            pointer += 1;
        }
        current += 1;
    }

    console.log(arr);
}

console.log(moveZeros([1, 2, 0, 3, 4, 0, 5, 6, 0]) === [0, 0, 0, 1, 2, 6, 3, 4, 5]);