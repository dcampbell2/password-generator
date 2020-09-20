// Arrays for characters

var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "?",
  "?",
  ":",
  "/",
  "|",
];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function passwordLength() {
  var howLong = prompt("How long would you like for your password to be?");

  var confirmNumbers = confirm("Do you confirm to the use of whole numbers?");

  var confirmCharacters = confirm(
    "Do you confirm the use of special characters?"
  );
}

function generatePassword() {
  return "This is where my generated password will go";
}

// Add event listener to generate button

generateBtn.addEventListener("click", passwordLength);

generateBtn.addEventListener("click", writePassword);
