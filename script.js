// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function passwordLength() {
  var numbers = prompt("How long would you like for your password to be?");

  var confirmNumber = confirm("Do you confirm to the use of whole numbers?")

  var confirmCharacters = confirm("Do you confirm the use of special characters?")
  
}

function generatePassword() {
  return "This is where my generated password will go";
}

// Add event listener to generate button

generateBtn.addEventListener("click", passwordLength);

generateBtn.addEventListener("click", writePassword);
