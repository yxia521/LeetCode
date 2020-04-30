// 1309. Decrypt String from Alphabet to Integer Mapping
// easy

// Given a string s formed by digits ('0' - '9') and '#' . We want to map s to English lowercase characters as follows:

// Characters ('a' to 'i') are represented by ('1' to '9') respectively.
// Characters ('j' to 'z') are represented by ('10#' to '26#') respectively. 
// Return the string formed after mapping.

// It's guaranteed that a unique mapping will always exist.

// Example 1:
const LETTERS = Array.from({ length: 26 }, (_, i) => String.fromCharCode('a'.charCodeAt(0) + i));

let s1 = "10#11#12"
console.log(freqAlphabets(s1)) 
// Output: "jkab"
// Explanation: "j" -> "10#" , "k" -> "11#" , "a" -> "1" , "b" -> "2".
// Example 2:

let s2 = "1326#"
console.log(freqAlphabets(s2))
// Output: "acz"
// Example 3:

let s3 = "25#"
console.log(freqAlphabets(s3))
// Output: "y"
// Example 4:

let s4 = "12345678910#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"
console.log(freqAlphabets(s4))
// Output: "abcdefghijklmnopqrstuvwxyz"
 
// Constraints:
// 1 <= s.length <= 1000
// s[i] only contains digits letters ('0'-'9') and '#' letter.
// s will be valid string such that mapping is always possible.

// input:
//   - string, numbers, #
// output:
//   - string, only letters
  
// rules:
//   - 'a' - 'i': '1' - '9'
//   - 'j' - 'z': '10#' - '26#'

// algo:
//   - clean up the string
//     - iterate thru the string, for each char, check its idx + 2 char
//       - if idx + 2 char is #, get current char, and its next char, then idx increments by 3;
//       - if idx + 2 char is not #, get the current char, idx increment by 1
      
//   - iterate thru the arr
//     - for each string
//       - convert it to number
//       - idx of letter in LETTERS = number - 1
//     - get the corresponding letter in LETTERS
//   - convert the arr to string

//   - return result

function freqAlphabets(str) {
  let num = [];
  
  for (let i = 0; i < str.length;) {
    if (str[i + 2] === '#') {
      num.push(str.slice(i, i + 2));
      i += 3;
    } else {
      num.push(str[i]);
      i += 1;
    }
  }
  
  return num.map(num => LETTERS[Number(num) - 1]).join('');
}
  
