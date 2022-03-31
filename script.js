// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomizedArr= []

// function to get the password options selected by the user

function generatePassword() {
    var numOfChars = prompt("How many characters would you like your password to contain")
    // var length = parseInt(numOfChars)
    if (isNaN(numOfChars)) {
      alert("This is not a number, Please type a number. ")
      userSelected();
    }
    if (numOfChars < 8 || numOfChars > 128) {
      alert("password needs to be between the number 8 & 128.")
    } 

    // ask for lowercase letters
    var lowercasePassword = confirm("Do you want lower case letter?")
    randomizedArr = randomizedArr.concat(lowercase)
    // ask for uppercase letters
    var uppercasePassword = confirm("Do you want to use uppercase letters?")
    randomizedArr = randomizedArr.concat(uppercase)
    // ask for numbers
    var numbersPassword = confirm("Do you want to use numbers?")
    randomizedArr = randomizedArr.concat(numberChars)
    //ask for special characters
    var specialPassword = confirm("Do you want to use special character?")
    randomizedArr = randomizedArr.concat(specialChars)

    var newRandomPw = "";
    for (let i = 0; i < numOfChars; i++) {
      newRandomPw += randomizedArr[Math.floor(Math.random() * randomizedArr.length)];
      
    }
    
    console.log(newRandomPw)
    return newRandomPw
    
}

// Assignment code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);