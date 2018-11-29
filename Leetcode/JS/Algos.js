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
  let currentMax = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], nums[i] + currentMax);
    max = Math.max(currentMax, max);
  }
  return max;
};

// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // => 6

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

// let matrix = [[1, 2, 3], [8, 9, 4], [7, 6, 5]];

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

  let minRooms = 0;
  let startTimes = intervals
    .map(interval => interval.start)
    .sort((a, b) => a - b);

  let endTimes = intervals.map(interval => interval.end).sort((a, b) => a - b);

  console.log("startTimes: ", startTimes, "endTimes: ", endTimes);

  let endIdx = 0;
  for (let startIdx = 0; startIdx < startTimes.length; startIdx++) {
    if (startTimes[startIdx] < endTimes[endIdx]) {
      minRooms += 1;
    } else {
      endIdx += 1;
    }
  }

  return minRooms;
};

let res = [[0, 30], [5, 10], [15, 20], [20, 30]];
// let res = [[7, 10], [2, 4]];
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
  // console.log("first run: ", res);
  let right = 1;
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= right;
    right *= nums[i];
  }
  return res;
};
// console.log(productExceptSelf([1, 2, 3, 4, 5]));

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
        // console.log("substring:", s.substring(j, i), "j: ", j, "i: ", i);
        arr[i] = true;
        break;
      }
    }
  }
  // console.log("arr: ", arr);
  return arr[s.length];
};

// let s = "catsandog";
// let wordDict = ["cats", "dog", "sand", "and", "cat"];
// console.log(wordBreak(s, wordDict));

// 22. Generate Parentheses
var generateParenthesis = function(n) {
  let store = [];
  generateHelper(n * 2, 1, 0, "(", store);
  return store;
};

function generateHelper(total, open, close, current, store) {
  if (current.length === total) {
    return store.push(current);
  }

  if (open > close) {
    if (open === total / 2) {
      // used all your open parentheses
      generateHelper(total, open, close + 1, current + ")", store);
    } else {
      generateHelper(total, open + 1, close, current + "(", store);
      generateHelper(total, open, close + 1, current + ")", store);
    }
  } else {
    generateHelper(total, open + 1, close, current + "(", store);
  }
}

// console.log(generateParenthesis(3));

/* 48. Rotate Image
Given input matrix =
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
] */

var rotate = function(matrix) {
  matrix.reverse();

  let offset = 0;
  for (let row = 0; row < matrix.length; row++) {
    for (let col = offset; col < matrix[0].length; col++) {
      let A = matrix[row][col];
      let B = matrix[col][row];

      matrix[row][col] = B;
      matrix[col][row] = A;
    }
    offset += 1;
  }
};

// let test = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// console.log(rotate(test));

// 78. Subsets
var subsets = function(nums) {
  if (nums.length === 0) {
    return [];
  }

  let res = [[]];

  for (let i = 0; i < nums.length; i++) {
    res.push([nums[i]]);
    let temp = [nums[i]];
    subHelper(nums.slice(i + 1, nums.length), temp, res);
  }

  return res;
};

var subHelper = function(nums, current, res) {
  if (nums.length === 0) {
    return null;
  }
  for (let i = 0; i < nums.length; i++) {
    let temp = current.slice(0).concat(nums.slice(i, i + 1));
    res.push(temp);
    subHelper(nums.slice(i + 1, nums.length), temp, res);
  }
};
// console.log(subsets([1, 2, 3, 4]));

// 31. Next Permutation MINE IS TRASH
var nextPermutation = function(nums) {
  if (nums.length === 1) {
    return;
  }
  if (inOrder(nums)) {
    nums.reverse();
    return;
  }

  let startSearchIdx = startOfWrongOrder(nums);
  swapWithNextLargestNum(nums);
  let startIndexToReverse = startSearchIdx + 1;
  reverse(nums);
  console.log("nums", nums);

  function reverse(nums) {
    let head = startIndexToReverse;
    let tail = nums.length - 1;
    while (tail > head) {
      let temp = nums[head];
      nums[head] = nums[tail];
      nums[tail] = temp;
      tail -= 1;
      head += 1;
    }
  }

  function swapWithNextLargestNum(nums) {
    let nextLargestNum = null;
    let nextLargestNumIdx = null;
    for (let i = nums.length - 1; i > startSearchIdx; i--) {
      if (nextLargestNum === null && nextLargestNumIdx === null) {
        if (nums[i] > nums[startSearchIdx]) {
          nextLargestNum = nums[i];
          nextLargestNumIdx = i;
        }
      } else if (nums[i] < nextLargestNum && nums[i] > nums[startSearchIdx]) {
        nextLargestNum = nums[i];
        nextLargestNumIdx = i;
      }
    }

    let temp = nums[startSearchIdx];
    nums[startSearchIdx] = nums[nextLargestNumIdx];
    nums[nextLargestNumIdx] = temp;
  }

  // starts from the right side
  function startOfWrongOrder(nums) {
    for (let i = nums.length - 1; i >= 0; i--) {
      let j = i - 1;
      if (nums[i] > nums[j]) {
        return j;
      }
    }
  }

  function inOrder(nums) {
    for (let i = 0; i < nums.length; i++) {
      let j = i + 1;
      if (nums[j] > nums[i]) {
        return false;
      }
    }
    return true;
  }
};

/*
var nextPermutation = function(nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i+1] <= nums[i]) {
      i--;
  }
  if (i >= 0) {
      let j = nums.length - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
          j--;
      }
      swap(nums, i, j);
  }
  
  let k = i + 1;
  let l = nums.length - 1;
  while (k < l) {
      swap(nums, k, l);
      k++;
      l--;
  }
};

function swap(nums, i, j) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
*/

// nextPermutation([2, 3, 1, 3, 3]);
// nextPermutation([2, 3, 1]);

// 42. Trapping Rain Water
var trap = function(height) {
  let waterVol = 0;
  let left = 0;
  let right = height.length - 1;
  let leftWall = height[left];
  let rightWall = height[right];

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] < leftWall) {
        waterVol += leftWall - height[left];
      } else {
        leftWall = height[left];
      }
      left++;
    } else {
      if (height[right] < rightWall) {
        waterVol += rightWall - height[right];
      } else {
        rightWall = height[right];
      }
      right--;
    }
  }
  return waterVol;
};

// console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));

// 70. Climbing Stairs WITH N SPACE
var climbStairs = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let history = [1, 2];
  while (n - 2 > 0) {
    let last = history[history.length - 1];
    let secondLast = history[history.length - 2];
    history.push(last + secondLast);
    n -= 1;
  }

  return history[history.length - 1];
};

// 70. Climbing Stairs WITH O(1) SPACE
var climbStairs2 = function(n) {
  if (n === 1) {
    return 1;
  }
  if (n === 2) {
    return 2;
  }

  let prev = 2;
  let prevPrev = 1;

  while (n - 3 > 0) {
    let temp = prevPrev;
    prevPrev = prev;
    prev += temp;
    n -= 1;
  }

  return prev + prevPrev;
};

// console.log(climbStairs2(4))

// 452. Minimum Number of Arrows to Burst Balloons
var findMinArrowShots = function(points) {
  if (points.length === 0) {
    return 0;
  }
  if (points.length === 1) {
    return 1;
  }

  points.sort((a, b) => a[0] - b[0]);
  let start = points[0][0];
  let end = points[0][1];
  let minArrows = 1;

  points.slice(1).forEach(point => {
    let newStart = point[0];
    let newEnd = point[1];

    if (newStart > end) {
      start = newStart;
      end = newEnd;
      minArrows += 1;
    } else if (newEnd < end) {
      end = newEnd;
    }
  });

  console.log(minArrows);
  return minArrows;
};

// let ex = [[1, 2], [3, 4], [5, 6], [7, 8]];
// let ex = [[10, 16], [2, 8], [1, 6], [7, 12]];
// let ex = [[2, 8], [1, 10]];
// findMinArrowShots(ex);

// 289. Game of Life
var gameOfLife = function(board) {
  if (board[0].length === 0 && board.length === 0) {
    return board;
  }
  let row, col;
  row = col = 0;
  gameOfLifeHelper(board, row, col);

  return board;
};

var gameOfLifeHelper = function(board, row, col) {
  let count, res;
  count = res = topBorder = leftBorder = 0;
  let rightBorder = board[0].length;
  let bottomBorder = board.length;

  // calls every function
  checkNeighbors();
  let cell = board[row][col];

  if (cell === 1) {
    // starts alive
    if (count < 2) {
      // dies
      res = 0;
    } else if (count === 2 || count === 3) {
      // lives
      res = 1;
    } else if (count > 3) {
      // dies
      res = 0;
    }
  } else {
    if (count === 3) {
      // lives
      res = 1;
    }
  }
  let newCoords = nextCell(row, col);
  if (newCoords === "done") {
    board[row][col] = res;
    return;
  } else {
    let newRow = newCoords["row"];
    let newCol = newCoords["col"];
    gameOfLifeHelper(board, newRow, newCol);
    board[row][col] = res;
  }

  // check up
  function checkNeighbors() {
    console.log("board: ", board, "row: ", row, "col: ", col);
    if (row !== 0) {
      // check up
      if (board[row - 1][col] === 1) {
        count += 1;
      }
      // check upper-let
      if (board[row - 1][col - 1] === 1) {
        count += 1;
      }
      // check upper-right
      if (board[row - 1][col + 1] === 1) {
        count += 1;
      }
    }
    // check left
    if (board[row][col - 1] === 1) {
      count += 1;
    }
    if (row + 1 !== bottomBorder) {
      // check down
      if (board[row + 1][col] === 1) {
        count += 1;
      }
      // check lower-left
      if (board[row + 1][col - 1] === 1) {
        count += 1;
      }
      // check lower-right
      if (board[row + 1][col + 1] === 1) {
        count += 1;
      }
    }
    // check right
    if (board[row][col + 1] === 1) {
      count += 1;
    }
  }

  function nextCell(row, col) {
    if (col + 1 >= rightBorder && row + 1 >= bottomBorder) {
      return "done";
    } else if (col + 1 === rightBorder) {
      col = 0;
      row += 1;
    } else {
      col += 1;
    }
    return { row: row, col: col };
  }
};
// let matrix = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
// let matrix = [[1]];
// console.log(gameOfLife(matrix));

// 739. Daily Temperatures
var dailyTemperatures = function(T) {
  let res = Array.from({ length: T.length }, x => 0);
  let stack = [];
  for (let i = 0; i < T.length; i++) {
    // console.log(
    //   "T[i]: ",
    //   T[i],
    //   "| T[stack[stack.length - 1]]: ",
    //   T[stack[stack.length - 1]],
    //   "| stack: ",
    //   stack,
    //   "| res: ",
    //   res
    // );
    while (stack.length > 0 && T[stack[stack.length - 1]] < T[i]) {
      let j = stack.pop();
      res[j] = i - j;
    }
    stack.push(i);
  }
  // console.log("res: ", res);
  return res;
};

// [1, 1, 4, 2, 1, 1, 0, 0];
dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]);

// 127. Word Ladder
var ladderLength = function(beginWord, endWord, wordList) {
  let seen = {};

  function oneLetterAway(firstWord, secondWord) {
    let difference = 0;
    let first = firstWord.split("").sort();
    let second = secondWord.split("").sort();

    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        difference += 1;
      }
      if (difference > 1) {
        return false;
      }
    }

    return true;
  }
};

// 49. Group Anagrams
var groupAnagrams = function(strs) {
  let store = {};
  strs.forEach(word => {
    let sortedWord = word.split("").sort();
    store[sortedWord]
      ? store[sortedWord].push(word)
      : (store[sortedWord] = [word]);
  });

  return Object.values(store);
};
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

// 204. Count Primes
var countPrimes = function(n) {
  if (n == 0 || n == 1) {
    return 0;
  }

  let bool_array = new Array(n).fill(true);
  let totalPrimes = 0;

  for (let i = 2; i < bool_array.length; i++) {
    if (bool_array[i] === true) {
      totalPrimes++;

      for (let j = i; j < bool_array.length; j += i) {
        bool_array[j] = false;
      }
    }
  }

  return totalPrimes;
};
// console.log(countPrimes(10));

// 167. Two Sum II - Input array is sorted
var twoSum = function(numbers, target) {
  let head = 0;
  let tail = numbers.length - 1;

  while (head < tail) {
    let total = numbers[head] + numbers[tail];
    if (total === target) {
      return [head + 1, tail + 1];
    } else if (total > target) {
      tail -= 1;
    } else {
      head += 1;
    }
  }
};

var twoSumWithBSearch = function(numbers, target) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let otherNum = target - numbers[i];
    let res = binarySearch(numbers, otherNum, 0, numbers.length);
    if (res !== -1 && res !== i) {
      return [i, res].sort();
    }
  }

  function binarySearch(arr, target, l, r) {
    while (l <= r) {
      let mid = Math.floor(l + (r - l) / 2);
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] > target) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return -1;
  }
};

var setZeroes = function(matrix) {
  setZeroesHelper(matrix, (row = 0), (col = 0));
  console.log(matrix);
};

var setZeroesHelper = function(matrix, row, col) {
  let maxRow = matrix.length - 1;
  let maxCol = matrix[0].length - 1;

  if (row > maxRow && col <= maxCol) {
    return;
  }
  let isZero = false;
  if (matrix[row][col] === 0) {
    isZero = true;
  }

  if (row <= maxRow && col < maxCol) {
    setZeroesHelper(matrix, row, col + 1);
  } else if (row <= maxRow && col === maxCol) {
    setZeroesHelper(matrix, row + 1, 0);
  }
  if (isZero) {
    // change row
    for (let i = 0; i < matrix[row].length; i++) {
      matrix[row][i] = 0;
    }
    // change col
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0;
    }
  }
};
// setZeroes([[0]]);

// 11. Container With Most Water
var maxArea = function(height) {
  let headIdx = 0;
  let tailIdx = height.length - 1;
  let max = 0;

  while (headIdx < tailIdx) {
    let head = height[headIdx];
    let tail = height[tailIdx];
    let temp = getArea(head, tail, tailIdx - headIdx);
    if (temp > max) {
      max = temp;
    }
    head > tail ? (tailIdx -= 1) : (headIdx += 1);
  }

  return max;

  function getArea(h1, h2, range) {
    return Math.min(h1, h2) * range;
  }
};

// 325. Maximum Size Subarray Sum Equals k
var maxSubArrayLen = function(nums, k) {
  let store = {};
  let res = 0;
  let acc = 0;

  for (let i = 0; i < nums.length; i++) {
    acc += nums[i];
    if (!store[acc]) {
      store[acc] = i;
    }

    if (store[acc - k]) {
      res = Math.max(res, i - store[acc - k]);
    }
  }

  return res;
};
// console.log(maxSubArrayLen([-2, -1, 2, 1], 1));

// 165. Compare Version Numbers
var compareVersion = function(version1, version2) {
  let v1 = version1.split(".").map(num => parseInt(num));
  let v2 = version2.split(".").map(num => parseInt(num));

  console.log(v1, v2);
  let i = 0;
  while (i < v1.length && i < v2.length) {
    if (v1[i] > v2[i]) {
      return 1;
    } else if (v1[i] < v2[i]) {
      return -1;
    }
    i += 1;
  }

  if (v1.length > v2.length) {
    if (v1.slice(i, v1.length).every(num => num === 0)) {
      return 0;
    } else {
      return 1;
    }
  } else if (v2.length > v1.length) {
    if (v2.slice(i, v2.length).every(num => num === 0)) {
      console.log("hi", v2.slice(i, v2.length));
      return 0;
    } else {
      return -1;
    }
  } else {
    return 0;
  }
};

console.log(compareVersion("1", "1.1"));
