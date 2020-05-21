function solution(str, ending){
  return str.endsWith(ending);
}

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

// Of course IE doesn't support method endsWith() BUT
// This code will just works fine.

function solution(str, ending){
  // TODO: complete
  if(str.slice(-ending.length) === ending || ending === '') {
    return true
  } else {
    return false
  }
}
