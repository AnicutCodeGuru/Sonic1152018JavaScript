//Strings in Javascript;

var str = "Welcome to Javascript programming";
console.log(str.split("").reverse().join("$"));


/***Write a program to find if the string is palindrome or not */

function isPalindrome(val){
   return val.split("").reverse().join("").toLowerCase() === val.toLowerCase();
}


console.log(isPalindrome("Madam"));