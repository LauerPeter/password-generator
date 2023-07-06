// Assignment Code
var generateBtn = document.querySelector("#generate");


var characterLower = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
var characterSpecial = ["!", "@", ")", "$", "%", "^", "&", "*", "(", "#"] ;
var characterNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] ;

function generatePassword() {
  var passwordLength = prompt("Please enter a number of characters for your password between 8-128");

  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password must be a valid number between 8-128")
    return
  }

  var includeUpper = confirm("Would you like to include upper case characters in your password?");
  var includeLower = confirm("Would you like to include lower case characters in your password?");
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  var includeNumeric = confirm("Would you like to include numbers in your password?");
  console.log (passwordLength, includeLower, includeUpper, includeSpecial, includeNumeric)

  if (includeUpper === false && includeLower === false && includeSpecial === false && includeNumeric === false){
    alert("You must select at least one character to include in your password.")
    return
  }

  var password = []

  if (includeUpper === true){
    password = password.concat(characterUpper)
  }
  if (includeLower === true){
    password = password.concat(characterLower)
  }
  if (includeSpecial === true){
    password = password.concat(characterSpecial)
  }
  if (includeNumeric === true){
    password = password.concat(characterNumeric)
  }

  console.log(password)
  var finalPassword = ""

  for (i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * password.length)
    finalPassword += password[randomIndex]
  }
  console.log(finalPassword)

  return finalPassword
}







// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  
//Getting help with tutor on this assignment. turning in what I have now and will end up re-submitting this when I have a better understanding

  
  





  

