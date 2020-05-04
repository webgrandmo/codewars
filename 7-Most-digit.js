//Find the number with the most digits.
//If two numbers in the argument array have the same number of digits, return the first one in the array.


const findLongest = (array) => {
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
}

findLongest([7, 8999, 9000, 8, 800])


/*

compares ${b} which is b as a string.length against the accum, a.
if length of b is greater than length of a ? return b : if not return a.
Return as in set the current accumulator to that value.
So given findLongest([7, 8999, 9000, 8, 800]). it checks if 8999.length > 7.length
and sets the running accumulator to 8999. then goes through and checks against all the remaining values.
Is 9000.length > 8999.length --- no. so set set accum as 8999. continue.
Is 8.length> 8999.length --- no and so on.
Checks the current accumulator against the next index.

*/
