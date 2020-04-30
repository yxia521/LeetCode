// 1221. Split a String in Balanced Strings
// Easy

// Balanced strings are those who have equal quantity of 'L' and 'R' characters.

// Given a balanced string s split it in the maximum amount of balanced strings.

// Return the maximum amount of splitted balanced strings.

// Example 1:

// Input: s = "RLRRLLRLRL"
// Output: 4
// Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
// Example 2:

// Input: s = "RLLLLRRRLR"
// Output: 3
// Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
// Example 3:

// Input: s = "LLLLRRRR"
// Output: 1
// Explanation: s can be split into "LLLLRRRR".
// Example 4:

// Input: s = "RLRRRLLRLL"
// Output: 2
// Explanation: s can be split into "RL", "RRRLLRLL", since each substring contains an equal number of 'L' and 'R'
 
// Constraints:

// 1 <= s.length <= 1000
// s[i] = 'L' or 'R'

let s1 = "RLRRLLRLRL";
console.log(balancedStringSplit(s1)); // 4

let s2 = "RLLLLRRRLR";
console.log(balancedStringSplit(s2)); // 3

let s3 = "LLLLRRRR";
console.log(balancedStringSplit(s3)); // 1

let s4 = "RLRRRLLRLL";
console.log(balancedStringSplit(s4)); // 2

// input:
//   - string
// output:
//   - integer, which is the maxium of splitted balanced string

// rules:
//   - balanced string: contains the same number of 'L' AND 'R'

// algo:
//   - countStr = 0;

//   - iterate thru the string
//     - when we met R, countR += 1
//     - when we met L, countL += 1

//     - whenever this two counts are equal
//       - countStr += 1
//       - if equal reassign the countR = 0, reassign the countR = 0

//   - return countStr at the end loop
  
function balancedStringSplit(str) {
  let countStr = 0;
  let countR = 0;
  let countL = 0;
  
  str.split('').forEach(char => {
    if (char === 'R') countR += 1;
    if (char === 'L') countL += 1;
    if (countR === countL) {
      countStr += 1;
      countR = 0;
      countL = 0;
    }
  });
  
  return countStr;
}
