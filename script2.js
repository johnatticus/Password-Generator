// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
​
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
​
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
​
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


function generatePassword() {
  let message = prompt("How many characters would you like your password to contain?");
  if (message != null) {
  let specialChars = confirm("Click ok to confirm including special characters");
  }
  let numberChars = confirm("Click ok to confirm including numbers");
  }
  let uppercase = confirm("Click ok to confirm including uppercase letters");
  }
  let lowercase = confirm("Click ok to confirm including lowercase letters");
}

// Assignment Code
var generateBtn = document.querySelector("#generate")

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);