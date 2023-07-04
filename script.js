// Assignment Code
var generateBtn = document.querySelector("#generate");

var characterLength
var characterLower
var characterUpper
var characterSpecial
var characterNumeric

var characterLength = [("8-128")]
var characterLower = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
var characterSpecial = ["!", "@", ")", "$", "%", "^", "&", "*", "(", "#"] ;
var characterNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] ;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
  characterLength = prompt ("Please choose a password length of at least 8 characters and no more than 128 characters");

  characterLower = prompt ("Would you like to include lower case characters in your password? Please type yes or no");
 
  characterUpper = prompt ("Would you like to include upper case characters in your password? Please type yes or no");
  
  characterSpecial = prompt ("Would you like to iclude special characters in your password? Please type yes or no");
  
  characterNumeric = prompt ("Would yopu like to include numbers in your password? Please type yes or no");

}

  
  

