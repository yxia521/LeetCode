// 1189. Maximum Number of Balloons
// easy

// Given a string text, you want to use the characters of text to form as many instances of the word "balloon" as possible.
// You can use each character in text at most once. Return the maximum number of instances that can be formed.

console.log(maxNumberOfBalloons("nlaebolko"));
// Output: 1

console.log(maxNumberOfBalloons("loonbalxballpoon"));
// Output: 2

console.log(maxNumberOfBalloons("leetcode"));
// Output: 0

console.log(maxNumberOfBalloons("krhizmmgmcrecekgyljqkldocicziihtgpqwbticmvuyznragqoyrukzopfmjhjjxemsxmrsxuqmnkrzhgvtgdgtykhcglurvppvcwhrhrjoislonvvglhdciilduvuiebmffaagxerjeewmtcwmhmtwlxtvlbocczlrppmpjbpnifqtlninyzjtmazxdbzwxthpvrfulvrspycqcghuopjirzoeuqhetnbrcdakilzmklxwudxxhwilasbjjhhfgghogqoofsufysmcqeilaivtmfziumjloewbkjvaahsaaggteppqyuoylgpbdwqubaalfwcqrjeycjbbpifjbpigjdnnswocusuprydgrtxuaojeriigwumlovafxnpibjopjfqzrwemoinmptxddgcszmfprdrichjeqcvikynzigleaajcysusqasqadjemgnyvmzmbcfrttrzonwafrnedglhpudovigwvpimttiketopkvqw"))
// 10

// algo:
//   - loop the text
  
//   - count the occurrences of each char we need
//     - create an obj to store the count
//       - key is letter
//       - value is count
//     - if the current char is included in "balloon", correponding value += 1
  
//   - find the min occurrences
//     - note that l and o 's ocurrences should be divided by 2

function maxNumberOfBalloons(text) {
  let count = { b: 0, a: 0, l: 0, o: 0, n: 0 };
  for (let char of text) {
    if (Object.keys(count).includes(char)) count[char] += 1;
  }
  
  Object.keys(count).forEach(key => {
    if (key === "l") count[key] = Math.floor(count[key] / 2);
    if (key === "o") count[key] = Math.floor(count[key] / 2);
  });
  
  return Math.min(...Object.values(count));
}
