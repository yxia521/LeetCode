// 1108. Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.

// A defanged IP address replaces every period "." with "[.]".

// Example 1:

let address1 = "1.1.1.1"
console.log(defangIPaddr(address1) ===  "1[.]1[.]1[.]1")
// Example 2:

let address2 = "255.100.50.0"
console.log(defangIPaddr(address2) === "255[.]100[.]50[.]0")
 
// Constraints:
// The given address is a valid IPv4 address.

function defangIPaddr(str) {
  let result = "";
  
  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === ".") {
      result = result.concat("[", str[idx], "]");
    } else {
      result = result.concat(str[idx]);
    }
  }
  
  return result;
}

// input:
//   - string, an IP address
// output:
//   - string, "." => "[.]"

// algo:
//   - result = ""
//   - iterate thru the string, locate the .
//     - for loop iterate thru the string
//     - push each char to the result
  
//   - if there's ., add [] to its both side
//     - when we meet the ., first push a [ to result, then push a ., then push a ]

//   - return final result
