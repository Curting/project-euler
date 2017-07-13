// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, 
// find the sum of the even-valued terms.

var prevN = 0;
var n = 1;
var tempN = n;
var sum = 0;

while (n < 4 * 10**6) {
  tempN = n;
  n = prevN + n;
  console.log(`${n} is a Fibonacci-number!`);
  prevN = tempN;
  
  if (n % 2 === 0) {
    sum += n;
  }
}

console.log(`The sum of the even-valued Fibonacci terms up to 4mil equals ${sum}.`)