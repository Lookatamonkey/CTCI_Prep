//  #258 - Add Digits
var addDigits = function(num) {
  if (num < 10) {
    return num;
  }
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
    if (!set.has(nums[i])) {
      set.add(nums[i]);
      nums[uniqueIdx] = nums[i];
      uniqueIdx += 1;
    }
  }

  return uniqueIdx;
};

// #35 - Search Insert
var searchInsert = function(nums, target) {
  if (nums.length === 0) {
    return 0;
  }

  let midpt = Math.floor(nums.length / 2);

  if (nums[midpt] === target) {
    return midpt;
  } else if (target > nums[midpt]) {
    return (
      searchInsert(nums.slice(midpt + 1, nums.length), target) + (midpt + 1)
    );
  } else {
    return searchInsert(nums.slice(0, midpt), target);
  }
};

// #763 - Partition Labels
var partitionLabels = function(S) {
  let store = new Array(26);
  let res = [];

  for (let i = 0; i < S.length; i++) {
    store[S[i].charCodeAt() - 97] = i;
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
  copy.sort((a, b) => {
    return a - b;
  });
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
    if (maxCounter < tempCounter) {
      maxCounter = tempCounter;
    }
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
    if (dictionaryA[s[i]] && dictionaryA[s[i]] !== t[i]) {
      return false;
    } else {
      dictionaryA[s[i]] = t[i];
    }
    if (dictionaryB[t[i]] && dictionaryB[t[i]] !== s[i]) {
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
  let step = 1,
    index = 0;
  for (let i = 0; i < s.length; i++) {
    if (result[index] === undefined) {
      result[index] = "";
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
  return result.join("");
};

// console.log(convert("PAYPALISHIRING", 3));
// console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
// console.log(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
// console.log(convert("PAYPALISHIRING", 5));

// 13. Roman Numeral to Integer

var romanToInt = function(s) {
  const dictionary = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };

  let arr = s.split("");
  let total = dictionary[arr[0]];
  let prev = s[0];

  for (let i = 1; i < arr.length; i++) {
    prev = dictionary[s[i - 1]];
    let current = dictionary[arr[i]];
    if (current > prev) {
      total -= prev;
      total += current - prev;
    } else {
      total += current;
    }
  }

  return total;
};

// console.log(romanToInt("LVIII"));

// #12 Int to Roman Numeral

// Input: 58
// Output: "LVIII"

// Input: 1994
// Output: "MCMXCIV"

var intToRoman = function(num) {
  const dictionary = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
  };

  const keys = Object.keys(dictionary).reverse();
  let arr = splitNum(num);
  let res = "";

  for (let i = 0; i < arr.length; i++) {
    let multiplier = Math.pow(10, arr.length - (i + 1));
    let tempNum = arr[i] * multiplier;
    res += createRN(tempNum, dictionary);
  }
  return res;
};

var createRN = function(num, dictionary) {
  const keys = Object.keys(dictionary).reverse();
  let res = "";

  while (num > 0) {
    for (let i = 0; i < keys.length; i++) {
      if (num >= keys[i]) {
        res += dictionary[keys[i]];
        num -= keys[i];
        break;
      }
    }
  }
  return res;
};

var splitNum = function(num) {
  let res = [];

  while (num > 9) {
    let digit = num % 10;
    res.unshift(digit);
    num = Math.floor(num / 10);
  }
  res.unshift(num);
  return res;
};

// #198 House Robber
var rob = function(nums) {
  if (nums.length < 1) {
    return 0;
  }
  let option1 = nums[0];
  let option2 = 0;

  for (let i = 1; i < nums.length; i++) {
    console.log("option1", option1);
    console.log("option2", option2);
    if (i % 2 === 0) {
      option1 = Math.max(option1 + nums[i], option2);
    } else {
      option2 = Math.max(option1, option2 + nums[i]);
    }
  }

  return Math.max(option1, option2);
};

// console.log(rob([1, 2, 3, 1]));
// console.log(rob([2, 7, 9, 3, 1]));
// console.log(rob([2, 7, 6, 9, 1]));
// console.log(rob([100, 50, 200, 1000, 10]));

// #53. Maximum Subarray
var maxSubArray = function(nums) {
  if (nums.length < 1) {
    return 0;
  }
  let max = nums[0];
  let tempMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (tempMax > max) {
      max = tempMax;
    }
    if (tempMax < 0 && nums[i] > tempMax) {
      tempMax = nums[i];
      continue;
    }
    if (tempMax + nums[i] > 0) {
      tempMax += nums[i];
    } else {
      tempMax = nums[i];
    }
  }

  return tempMax > max ? tempMax : max;
};

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // => 6

var spiralOrder = function(matrix) {
  if (matrix.length === 0) {
    return [];
  }

  let rightBoundary = matrix[0].length - 1;
  let leftBoundary = 0;
  let upperBoundary = 0;
  let lowerBoundary = matrix.length - 1;
  let direction = "right";
  let nums = [];

  let col = 0;
  let row = 0;

  nums.push(matrix[col][row]);
  while (leftBoundary <= rightBoundary && upperBoundary <= lowerBoundary) {
    // goes right
    if (direction === "right") {
      while (row < rightBoundary) {
        row += 1;
        nums.push(matrix[col][row]);
      }
      upperBoundary += 1;
      direction = "down";

      // goes down
    } else if (direction === "down") {
      while (col < lowerBoundary) {
        col += 1;
        nums.push(matrix[col][row]);
      }
      rightBoundary -= 1;
      direction = "left";

      // goes left
    } else if (direction === "left") {
      while (row > leftBoundary) {
        row -= 1;
        nums.push(matrix[col][row]);
      }
      lowerBoundary -= 1;
      direction = "up";

      // goes up
    } else {
      while (col > upperBoundary) {
        col -= 1;
        nums.push(matrix[col][row]);
      }
      leftBoundary += 1;
      direction = "right";
    }
  }

  return nums;
};

let matrix = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

// let matrix = [
//     [ 1, 2, 3, 4 ],
//     [ 10, 11, 12, 5 ],
//     [ 9, 8, 7, 6 ]
// ];

// let matrix = [
//     [ 1, 2, 3, 4 ],
//     [ 12, 13, 14, 5 ],
//     [ 11, 16, 15, 6 ],
//     [ 10, 9, 8, 7 ],
// ];

// console.log(spiralOrder(matrix));

// #345 Reverse Vowels of a String

var reverseVowels = function(s) {
  if (s.length <= 1) {
    return s;
  }

  let head = 0;
  let tail = s.length - 1;
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  s = s.split("");
  while (head < tail) {
    while (!vowels.has(s[head])) {
      if (head > tail) {
        return s.join("");
      }
      head += 1;
    }
    while (!vowels.has(s[tail])) {
      tail -= 1;
    }

    if (head > tail) {
      break;
    }
    let temp = s[head];
    s[head] = s[tail];
    s[tail] = temp;
    head += 1;
    tail -= 1;
  }

  return s.join("");
};
// console.log(reverseVowels(".,"));

// #200 Number of Islands
var numIslands = function(grid) {
  // FOR SOME REASON USING A SET DOESNT WORK BUT USING A HASHMAP WORKS?
  if (grid.length === 0 || grid[0].length === 0) {
    return 0;
  }
  // let store = new Set([]);
  return islandHelper(grid);

  function islandHelper(grid) {
    let maxRow = grid.length;
    let maxCol = grid[0].length;
    let numIslands = 0;

    for (let r = 0; r < maxRow; r++) {
      for (let c = 0; c < maxCol; c++) {
        // seen square already
        if (grid[r][c] === "1") {
          islandTracker(grid, r, c, maxRow, maxCol);
          numIslands += 1;
        }
      }
      c = 0;
    }

    return numIslands;
  }

  function islandTracker(grid, r, c, maxRow, maxCol) {
    if (c >= maxCol || r >= maxRow || c < 0 || r < 0) {
      return;
    }

    if (grid[r][c] === "1") {
      grid[r][c] = "0";
      islandTracker(grid, r, c + 1, maxRow, maxCol); //goes left
      islandTracker(grid, r + 1, c, maxRow, maxCol); //goes down
      islandTracker(grid, r, c - 1, maxRow, maxCol); //goes right
      islandTracker(grid, r - 1, c, maxRow, maxCol); //goes up
    }
  }
};

// let island = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];
// let island = [["1","1","1"],["0","1","0"],["1","1","1"]];
// console.log(numIslands(island));

// 2228. Summary Ranges
var summaryRanges = function(nums) {
  if (nums.length < 1) {
    return [];
  }
  if (nums.length === 1) {
    return [nums[0].toString()];
  }
  let res = [];
  let head = nums[0];
  let tail = head;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === tail + 1) {
      tail = nums[i];
    } else {
      if (head === tail) {
        res.push(head.toString());
      } else {
        res.push(head.toString() + "->" + tail.toString());
      }
      head = nums[i];
      tail = nums[i];
    }
  }

  head === tail
    ? res.push(head.toString())
    : res.push(head.toString() + "->" + tail.toString());

  return res;
};

// 162. Find Peak Element
// Question claims this could be done in O(logn) but it impossible to determine with 100% certainty
// which side has the peak if it's a flat range like [1, 1, 1, 1, 1, 1, 1, 2].
var findPeakElement = function(nums) {
  return fpeHelper(nums, 0, nums.length - 1);
};

var fpeHelper = function(nums, low, high) {
  console.log("nums: ", nums, "low: ", low, "high: ", high);
  if (low === high) {
    return low;
  } else {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = mid1 + 1;

    if (nums[mid1] > nums[mid2]) {
      return fpeHelper(nums, low, mid1);
    } else {
      return fpeHelper(nums, mid2, high);
    }
  }
};

// let nums = [1,2,3,1];
// let nums = [1,2,1,1];
// let nums = [1,1,1,2];
// let nums = [2,1,1,1];
// let nums = [1,2,1,3,5,6,4];
// console.log(findPeakElement(nums))

// #253 Meeting Rooms II TODO
var minMeetingRooms = function(intervals) {
  if (intervals.length <= 0) {
    return 0;
  }
  if (intervals.length === 1) {
    return 1;
  }
  intervals.sort((a, b) => a.start - b.start);
  let minRooms = 1;

  for (let i = 1; i < intervals.length; i++) {
    for (let j = 0; j < i; j++) {
      let current = intervals[i];
      let prev = intervals[j];

      if (prev.end > current.start) {
        res += 1;
        break;
      }
    }
    j = 0;
  }

  return minRooms;
};

let res = [[0, 30], [5, 10], [15, 20], [20, 30]];
// let res = [[7,10],[2,4]];
// console.log(minMeetingRooms(res));

var mergeIntervals = function(intervals) {
  if (intervals.length <= 0) {
    return [];
  }
  if (intervals.length === 1) {
    return [intervals[0]];
  }
  intervals.sort((a, b) => a[0] - b[0]);

  let resStack = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    let prev = resStack.pop();
    let next = intervals[i];

    // merge
    if (prev[1] >= next[0]) {
      if (prev[1] >= next[1]) {
        resStack.push(prev);
      } else {
        let temp = [prev[0], next[1]];
        resStack.push(temp);
      }
    } else {
      // dont merge
      resStack.push(prev, next);
    }
  }

  return resStack;
};
// console.log(mergeIntervals([[1,4],[0,2],[3,5]]));

// 325. Maximum Size Subarray Sum Equals k
var maxSubArrayLen = function(nums, k) {
  // int sum = 0, max = 0;
  // HashMap<Integer, Integer> map = new HashMap<Integer, Integer>();
  // for (int i = 0; i < nums.length; i++) {
  //     sum = sum + nums[i];
  //     if (sum == k) max = i + 1;
  //     else if (map.containsKey(sum - k)) max = Math.max(max, i - map.get(sum - k));
  //     if (!map.containsKey(sum)) map.put(sum, i);
  // }
  // return max;

  if (nums.length < 1) {
    return 0;
  }
  let max = 0,
    sum = 0;
  let store = {};

  // sum - k = sum(i);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === k) {
      max = i + 1;
    } else if (store[sum - k] === 0 || store[sum - k]) {
      max = Math.max(max, i - store[sum - k]);
    }
    if (!store[sum] && !(store[sum] === 0)) {
      store[sum] = i;
    }
  }
  return max;
};

// console.log(maxSubArrayLen([-2, -1, 2, 1], 1));
// console.log(maxSubArrayLen([1, 0 , -1], -1));
// console.log(maxSubArrayLen([-2, 1, 3, -3, 1], 1));
// console.log(maxSubArrayLen([1, -1, 5, -2, 3], 3));

// 238. Product of Array Except Self
var productExceptSelf = function(nums) {
  const n = nums.length;
  let res = new Array(n);
  res[0] = 1;
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * nums[i - 1];
  }
  console.log("first run: ", res);
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};
// console.log(productExceptSelf([1, 2, 3, 4]));

// 1. Two Sum
var twoSum = function(nums, target) {
  let store = {};
  for (let i = 0; i < nums.length; i++) {
    store[nums[i]] = i;
  }
  console.log("store: ", store);

  for (let i = 0; i < nums.length; i++) {
    if (store[target - nums[i]] === i) continue;
    if (store[target - nums[i]]) {
      return [store[target - nums[i]], i];
    }
  }
};
// console.log(twoSum([2, 7, 11, 15], 9));
// 23. Merge k Sorted Lists
var mergeKLists = function(lists) {
  if (lists.length <= 1) {
    return lists;
  }
  let mid = Math.floor(lists.length / 2);
  let left = mergeKLists(lists.slice(0, mid));
  let right = mergeKLists(lists.slice(mid, lists.length));

  return merge(left, right);
};

function merge(listA, listB) {
  let res;
  if (listA.val > listB.val) {
    res = listB;
    listB = listB.next;
  } else {
    res = listA;
    listA = listA.next;
  }

  while (listA && listB) {
    if (listA.val > listB.val) {
      res.next = listB;
      listB = listB.next;
    } else {
      res.next = listA;
      listA = listA.next;
    }
  }

  if (listA === null) {
    res.next = listB;
  } else if (listB === null) {
    res.next = listA;
  }
  console.log("res of merge: ", res);
  return res;
}

/* Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6 */

var wordBreak = function(s, wordDict) {
  let wordSet = new Set([]);
  wordDict.forEach(word => wordSet.add(word));

  let arr = new Array(s.length + 1).fill(false);
  arr[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] && wordSet.has(s.substring(j, i))) {
        console.log("j: ", j, "i: ", i);
        arr[i] = true;
        break;
      }
    }
  }
  console.log("arr: ", arr);
  return arr[s.length];
};

let s = "leetcode";

let wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict));
