//  #258 - Add Digits
var addDigits = function(num) {
    if (num < 10) {return num;}
    let newNum = 0;
    
    while (num > 9) {
      newNum += num % 10;
      num = Math.floor(num / 10);
    }
    newNum += num;
    
    if (newNum > 9) {
        return addDigits(newNum);
    } else {
        return newNum;
    }
};

// #283 - Move Zeros
var moveZeroes = function(nums) {
    let nonZeroIdx = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nonZeroIdx] = nums[i];
            nonZeroIdx += 1;
        }
    }
    
    for (let i = nonZeroIdx; i < nums.length; i++) {
        nums[i] = 0;
    }
};

// #27 - Remove Element
var removeElement = function(nums, val) {
    let notValIdx = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[notValIdx] = nums[i];
            notValIdx += 1;
        }
    }
    
    return notValIdx;
};

//  #26 - Remove Dups
var removeDuplicates = function(nums) {
    const set = new Set();
    let uniqueIdx = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if ( !(set.has(nums[i])))  {
            set.add(nums[i]);
            nums[uniqueIdx] = nums[i];
            uniqueIdx += 1;
        }
    }
    
    return uniqueIdx;
};

// #35 - Search Insert
var searchInsert = function(nums, target) {
    if (nums.length === 0)  { return 0; }
    
    let midpt = Math.floor(nums.length / 2);
    
    if (nums[midpt] === target) {
        return midpt;
    } else if (target > nums[midpt]) {
        return searchInsert(nums.slice(midpt+1, nums.length), target) + (midpt+1);
    } else {
        return searchInsert(nums.slice(0, midpt), target);
    }
};

// #763 - Partition Labels
var partitionLabels = function(S) {
    let store = new Array(26);
    let res = [];
    
    for (let i = 0; i < S.length; i++) {
        store[(S[i].charCodeAt()) - 97] = i;
    }

    let partition = 0;
    let lastSceneIdx = store[S[0].charCodeAt() - 97];
    for (let i = 0; i < S.length; i++) {
        if (store[S[i].charCodeAt() - 97] > lastSceneIdx) {
            lastSceneIdx = store[S[i].charCodeAt() - 97];
        }
        if (lastSceneIdx === i) {
            let word = S.slice(partition, i + 1);
            res.push(word.length);
            partition = i + 1;
        }
    }
    
    return res;
};
// console.log(partitionLabels("ababcbacadefegdehijhklij"));

// 300. Longest Increasing Subsequence
var lengthOfLIS = function(nums) {
    let copy = nums.slice();
    copy.sort((a, b) => { return a - b; });
    let store = {};

    for (let i = 0; i < nums.length; i++) {
        store[nums[i]] = i;
    }
    
    let maxCounter = 1;
    let tempCounter = 1;
    let prevIdx = store[copy[0]];

    for (let i = 1; i < copy.length; i++) {
        if (store[copy[i]] > prevIdx) {
            tempCounter += 1;
            
        } else {
            
            tempCounter -= 1;
        }
        if (maxCounter < tempCounter) { maxCounter = tempCounter; }
        prevIdx = store[copy[i]];
    }

    return maxCounter;
};

// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
// [10,9,2,5,3,7,101,18]
// [2,3,5,7,9,10,18,101]

// #205 Isomorphic Strings
var isIsomorphic = function(s, t) {
    let dictionaryA = {};
    let dictionaryB = {};
    
    for (let i = 0; i < s.length; i++) {
        if ( dictionaryA[s[i]] && (dictionaryA[s[i]] !== t[i])) {
            return false;
        } else {
            dictionaryA[s[i]] = t[i];
        }
        if ( dictionaryB[t[i]] && (dictionaryB[t[i]] !== s[i])) {
            return false;
        } else {
            dictionaryB[t[i]] = s[i];
        }
    }
    return true;
};


// 6. ZigZag Conversion
// 0 1 2 3 4 5 6 7 8 9 0 1 2 13
// P A Y P A L I S H I R I N G (3)
// P A H N A P L S I I G Y I R

// P   A   H   N
// A P L S I I G
// Y   I   R

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

// P      H
// A    S I   
// Y   I  R  
// P L    I G
// A      N

var convert = function(s, numRows) {
    let result = [];
    let step = 1, index = 0;
    for (let i = 0; i < s.length; i++) {
        if (result[index] === undefined) {
            result[index] = '';
        }
        result[index] += s[i];
        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }
    console.log(result);
    return result.join('');
};

// console.log(convert("PAYPALISHIRING", 3));
// console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
console.log(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
// console.log(convert("PAYPALISHIRING", 5));