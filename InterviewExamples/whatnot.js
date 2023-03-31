//convert these strings
// 'abc' -> [[a, 1], [b, 1], [c, 1]]
// 'abbc' -> [[a, 1], [b, 2], [c, 1]]
// 'abbcdda' -> [[a, 1], [b, 2], [c, 1], [d, 2], [a, 1]]
// 'pppprrpqpps' -> [[p, 4], [r, 2], [p, 1], [q, 1], [p, 2], [s, 1]]

function destructString(str) {
  let arr = [];
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      arr.push([str[i], count]);
      count = 1;
    }
  }
  return arr;
}

console.log(destructString('abc'));
console.log(destructString('abbc'));
console.log(destructString('pppprrpqpps'))