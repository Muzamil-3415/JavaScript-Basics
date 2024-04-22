// Question 7:
// Given the string, check if it is a palindrome.
// Example:
// For inputString = "aabaa", the output should be = true; For inputString = "abac", 
// the output should be = false; For inputString = "a", the output should be = true.

function isPalindrome(inputString){
    let reversedString = inputString.split('').reverse().join(''); 
    // We have created a variable reversed String, in which we will store the Input string, 
    // first we will split it meaning break it into seperate characters and then reverse it and then join it
    return inputString === reversedString;
    // Here we are returning a check if the inputString is equals to the reversedString
}
console.log(isPalindrome("aabaa"));
console.log(isPalindrome("abac"));
console.log(isPalindrome("a"));