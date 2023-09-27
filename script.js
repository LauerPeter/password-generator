

//variables

var generateBtn = document.querySelector("#generate");
var characterLower = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
var characterSpecial = ["!", "@", ")", "$", "%", "^", "&", "*", "(", "#"] ;
var characterNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] ;


function generatePassword() {
  var passwordLength = prompt("Please enter a number of characters for your password between 8-128");
//if the user chooses an invalid character length then a prompt appears
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Password must be a valid number between 8-128")
    return
  }
// users prompts for password 
  var includeUpper = confirm("Would you like to include upper case characters in your password?");
  var includeLower = confirm("Would you like to include lower case characters in your password?");
  var includeSpecial = confirm("Would you like to include special characters in your password?");
  var includeNumeric = confirm("Would you like to include numbers in your password?");
  console.log (passwordLength, includeLower, includeUpper, includeSpecial, includeNumeric)
// if statement if user chooses all false
  if (includeUpper === false && includeLower === false && includeSpecial === false && includeNumeric === false){
    alert("You must select at least one character to include in your password.")
    return
  }

  var password = []
//if statements for all true
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
//generates random password with users prompts
  for (i = 0; i < passwordLength; i++){
    var randomIndex = Math.floor(Math.random() * password.length)
    finalPassword += password[randomIndex]
  }
  console.log(finalPassword)
//returns final password on screen
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


  
  
  





  

