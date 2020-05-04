//Find the number with the most digits.
//If two numbers in the argument array have the same number of digits, return the first one in the array.


const findLongest = (array) => {
  return array.reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);
}

findLongest([7, 8999, 9000, 8, 800])
