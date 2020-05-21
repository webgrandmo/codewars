/*
Details:
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string). 
*/


function solution(str, ending){
  return str.endsWith(ending);
}

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

// Of course IE doesn't support method endsWith() BUT
// This code will just works fine.

function solution(str, ending){
  if(str.slice(-ending.length) === ending || ending === '') {
    return true
  } else {
    return false
  }
}
