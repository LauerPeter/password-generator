// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var characterLength ;
var characterLower ;
var characterUpper ;
var characterSpecial ;
var characterNumeric ;
var confirmClick ;

var characterLength = [("8-128")]
var characterLower = ["a", "b", "c", "d", "e", "f","g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"] ;
var characterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"] ;
var characterSpecial = ["!", "@", ")", "$", "%", "^", "&", "*", "(", "#"] ;
var characterNumeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"] ;

var confirmCharacterLength ;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  
    confirmClick = parseInt(prompt ("Please choose a password length of at least 8 characters and no more than 128 characters"));

      alert(`Your password will have ${confirmCharacterLength} characters`);

   if (confirmClick < 8 || confirmClick > 128)
    
      alert("The password length must be between 8-128 characters, try again.") 
     
   if (characterLength === false && characterLower === false && characterSpecial === false && characterNumeric === false) 
      
      return "Your input does not match password critia";
       
  }

 
  var CharacterUpper = confirm("Would you like your password to contain a uppercase character?");
  
  var characterLower = confirm("Would you like your password to contain a lowercase character?");
  
  var characterSpecial = confirm("Would you like your password to contain a special character?");
  
  var characterNumeric = confirm("Would you like your password to contain a number character?"); 

  
  if (characterUpper) {multiSelect += uppercase} ;
 
  if (characterUpper) {multiSelect += lowercase} ;
 
  if (characterNumeric) {multiSelect += numbers} ;
 
  if (characterSpecial) {multiSelect += symbols} ;
  
  generatePassword ()

  
//Getting help with tutor on this assignment. turning in what I have now and will end up re-submitting this when I have a better understanding

  
  





  

