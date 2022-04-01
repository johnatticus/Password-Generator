// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// function to get the password options selected by the user
function generatePassword() {

    var randomizedArr= []
    var numOfChars = prompt("How many characters would you like your password to contain")
    if (isNaN(numOfChars)) {
      alert("This is not a number. Please type a number. ")
      generatePassword();
    }
    if (numOfChars < 8 || numOfChars > 128) {
      alert("password needs to be between the number 8 & 128.")
      generatePassword();
    } 

    // ask for lowercase letters
    var lowercasePassword = confirm("Do you want lower case letter?")
    if (lowercasePassword) {
        randomizedArr = randomizedArr.concat(lowercase)
        }
        // console.log(randomizedArr)
    
    // ask for uppercase letters
    var uppercasePassword = confirm("Do you want to use uppercase letters?")
    if (uppercasePassword) {
        randomizedArr = randomizedArr.concat(uppercase) 
        }

    // ask for numbers
    var numbersPassword = confirm("Do you want to use numbers?")
    if (numbersPassword) {
        randomizedArr = randomizedArr.concat(numberChars)
    }

    // ask for special characters
    var specialPassword = confirm("Do you want to use special character?")
    if (specialPassword) {
        randomizedArr = randomizedArr.concat(specialChars)
    }

    // if the user failed to select at least one of the options
    if (!lowercasePassword && !uppercasePassword && !numbersPassword && !specialPassword) {
        alert("You need to pick at least one.")
        generatePassword();
    }
    
    // loop to get our new random password using the array we made above
    var newRandomPw = "";
    for (let i = 0; i < numOfChars; i++) {
      newRandomPw += randomizedArr[Math.floor(Math.random() * randomizedArr.length)];
      
    }
        
    // enters our created password to this function for use with the function below
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