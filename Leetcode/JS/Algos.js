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