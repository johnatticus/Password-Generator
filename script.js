// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var randomizedArr= []

// function to get the password options selected by the user

function userSelected() {
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
    randomizedArr = randomizedArr.concat(lowercasePassword)
    // ask for uppercase letters
    var uppercasePassword = confirm("Do you want to use uppercase letters?")
    randomizedArr = randomizedArr.concat(uppercasePassword)
    // ask for numbers
    var numbersPassword = confirm("Do you want to use numbers?")
    randomizedArr = randomizedArr.concat(numbersPassword)
    //ask for special characters
    var specialPassword = confirm("Do you want to use special character?")
    randomizedArr = randomizedArr.concat(specialPassword)


    var newRandomPw = "";
    // pick target number (pwLength) of characters from built array (finalPasswordArray)
    for (let i = 0; i < length; i++) {
      newRandomPw += randomizedArr[Math.floor(Math.random() * randomizedArr.length)];
      
    }
    var index = math.floor(math.random() * options.length);
    var userSelected = options[index];
    return user

    
}

// need an array to randomize the elements selected from the user options
function randomSelected(randomizedArr) {
    //user math.floor to select random choice within the choice array
    // choose random characters in the array
    // return the random element 
var index = math.floor(math.random() * options.length);
    var userSelected = options[index];

}

// function to generate the password from user input
function generatePassword() {
    // create an empty variable to store the concatenated password
    var choice = userSelected();
    
    // create an empty variable holding all possible password choices
    // creat an empty variable to hold the chosen characters

    //error handling to see if the object with your choices exist or not

    // Conditional statements are needed to add if the user has chosen special chars into an array of possible characters and must push new random chars to chosen array !!!!!!choice.obj is a filler!!!!!!
    if (choice.obj) {
        possibleChar = possibleChar.concat(specialChars)
        pickedChar.push(randomSelected(specialChars));
    }
    
    //iterate over the password length from the choice made (obj), selecting random indexes from the array of possible chars and puts them into a result variable
    for (var i = 0; index < choice.length; i++) {
        var possibleChar = getSelection[i];

    }
    // BELOW IS A TEMPLATE CODE FOR THE ABOVE 
    // for (let index = 0; index < array.length; index++) {
    //     const element = array[index];

    // }

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
    }

    // combine the results and send them to the writePassword function to present on the page

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