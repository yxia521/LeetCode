// 657. Robot Return to Origin
// easy

// There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

// The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

// Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

// Example 1:

console.log(judgeCircle("UD"));
// Output: true 
// Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
 

// Example 2:

console.log(judgeCircle("LL"));
// Output: false
// Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.

console.log(judgeCircle("RLUURDDDLU")) // true

// input:
//   - string,includes only 'RLUD'
// output:
//   - true / false

// algo:
//   - set an initial count 0
//     - count = 0

//   - set a count for each move
//     - 'R': +1 'L': -1 'U': +2 'D': -2
  
//   - iterate thru the moves, do math
  
//   - check if the final value of count is 0, if 0, return true, otherwise, return false

function judgeCircle(moves) {  
  let count = 0;
  
  moves.split('').forEach(move => {
    switch (move) {
      case 'R': return count += 1;
      case 'L': return count -= 1;
      case 'U': return count += 2;
      case 'D': return count -= 2;
    }
  });
  
  return count === 0;
}
// Not cool :(
// Runtime: 60 ms, faster than 81.65% of JavaScript online submissions for Robot Return to Origin.
// Memory Usage: 37.2 MB, less than 16.67% of JavaScript online submissions for Robot Return to Origin.
