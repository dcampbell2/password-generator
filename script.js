// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var howLong = Number(
    prompt("Enter a number for how long you would like your password to be?")
  );

  var values = "ABCDEFGHIJKLMNOPQRSTUCWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()+|?/.,:'><[{]}`~";

  // if statement to validate user input in howLong variable

  if(howLong < 8){
    alert("Password must be longer than 8 characters.");
    return "";
  } else if(howLong > 129){
    alert("Password cannot be greater than 129 Characters");
    return "";
  }else{
    var confirmUpperCase = confirm(
      "Click OK to confirm the use of upper case letters."
    );
  
    var confirmLowerCase = confirm(
      "Click OK to confirm the use of lowercase letters."
    );
  
    var confirmNumbers = confirm("Click OK to confirm the use of whole numbers.");
  
    var confirmCharacters = confirm(
      "Click OK to confirm the use of special characters."
    );
  
    // variable to be used to return value of for loop
    var retVal = "";
  
    
    for (var i = 0; i < howLong; i++) {
      // picks random characters from the "values" variables beginning at index of a random number
      retVal += values.charAt(Math.floor(Math.random() * values.length));
    }
  }
  return retVal;
}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
