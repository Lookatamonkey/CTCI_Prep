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