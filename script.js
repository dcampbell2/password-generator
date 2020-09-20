// Arrays for characters

// var values = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
//   "!",
//   "@",
//   "#",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
//   "(",
//   ")",
//   "?",
//   "?",
//   ":",
//   "/",
//   "|",
//   "0",
//   "1",
//   "2",
//   "3",
//   "4",
//   "5",
//   "6",
//   "7",
//   "8",
//   "9",
// ];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

  var howLong = Number(prompt("Enter a number for how long you would like your password to be?"));

  var values = "ABCDEFGHIJKLMNOPQRSTUCWXYZ0123456789!@#$%^&*()+|?/";

  var confirmUpperCase = confirm("Click OK to confirm the use of upper case letters.")

  var confirmLowerCase = confirm("Click OK to confirm the use of lowercase letters.")

  var confirmNumbers = confirm("Click OK to confirm the use of whole numbers.");

  var confirmCharacters = confirm("Click OK to confirm the use of special characters.");

  var retVal = "";

  for (var i = 0; i < howLong; i++) {
    retVal += values.charAt(Math.floor(Math.random() * values.length))
    
  }
  return retVal;
}

// Add event listener to generate button

generateBtn.addEventListener("click", generatePassword);

generateBtn.addEventListener("click", writePassword);
