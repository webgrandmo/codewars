/*The problem
An isogram is a word that has no repeating letters, consecutive or non-consecutive.
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.*/

/*The solution
Capture a character, then eventually match that same character again using a backreference.
If that same character is found, then it's not an isogram, else it is an isogram

    (.) - Match any character, and put it into a capture group
    .* - Match zero or more characters
    \1 - Followed by the same character of the earlier capture group
*/

const isIsogram = str => !str.match(/(.).*\1/i);
