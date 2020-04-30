// 3. Longest Substring Without Repeating Characters
// Medium

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

console.log(lengthOfLongestSubstring("bbbbb")) // 1
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

console.log(lengthOfLongestSubstring("pwwkew")) // 3
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
console.log(lengthOfLongestSubstring("abcdefj")) // 7

// input:
//   - string
// output:
//   - integer, length of longest substr without repeating chars
  
// algo:
//   - find all substr
//     - outer loop
//       - inner loop
  
//   - filter out these without repeated char
//     - iterate thru the arr, for each substr
//       - if string.indexOf(char) === string.lastIndexOf(char), the char is uniq
  
//   - return the longest one
//     - sort the arr by length in a descending order
//     - return [0].length

// works for my test cases, didn't pass all leetcode cases
function lengthOfLongestSubstring(str) {
  let substr = [];
  
  for (let startIdx = 0; startIdx < str.length; startIdx += 1) {
    for (let endIdx = startIdx + 1; endIdx <= str.length; endIdx += 1) {
      substr.push(str.slice(startIdx, endIdx));
    }
  }
  
  let nonRepeat = substr.filter(sub => {
    return sub.split('').every(char => sub.indexOf(char) === sub.lastIndexOf(char));
  });
  
  return nonRepeat.sort((a, b) => b.length - a.length)[0].length;
}
