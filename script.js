// Arrays for special characters, lowercase letters, uppercase letters, and numbers
const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// function to get the password options selected by the user
function generatePassword() {
  
  // empty array to push characters to as we go through prompts
  let randomizedArr = [];
  // array to push manditory characters to guarantee one of all types selected is in final password
  let manditoryArr = [];
  // where we store final password as string to display on page
  let newRandomPw = [];

  // run through the prompts
  let numOfChars = prompt(
    "How many characters would you like your password to contain"
  );

  // make sure a number is chosen
  if (isNaN(numOfChars)) {
    alert("This is not a number. Please type a number. ");
    return null;
  }

  // make sure password is between 8 and 128 characters
  if (numOfChars < 8 || numOfChars > 128) {
    alert("password needs to be between the number 8 & 128.");
    return null;
  }

  // ask for lowercase letters
  let lowercasePassword = confirm("Do you want lower case letter?");
  if (lowercasePassword) {
    randomizedArr = randomizedArr.concat(lowercase);
    let randomIndex = lowercase[Math.floor(Math.random() * lowercase.length)];
    console.log(randomIndex)
    manditoryArr.push(randomIndex);
    console.log(manditoryArr)
  }
  console.log(randomizedArr);

  // ask for uppercase letters
  let uppercasePassword = confirm("Do you want to use uppercase letters?");
  if (uppercasePassword) {
    randomizedArr = randomizedArr.concat(uppercase);
    let randomIndex = uppercase[Math.floor(Math.random() * uppercase.length)];
    console.log(randomIndex)
    manditoryArr.push(randomIndex);
    console.log(manditoryArr)
    console.log(randomizedArr);
  }

  // ask for numbers
  let numbersPassword = confirm("Do you want to use numbers?");
  if (numbersPassword) {
    randomizedArr = randomizedArr.concat(numberChars);
    let randomIndex = numOfChars[Math.floor(Math.random() * numOfChars.length)];
    console.log(randomIndex)
    manditoryArr.push(randomIndex);
    console.log(manditoryArr)
    console.log(randomizedArr);
  }

  // ask for special characters
  let specialPassword = confirm("Do you want to use special character?");
  if (specialPassword) {
    randomizedArr = randomizedArr.concat(specialChars);
    let randomIndex = specialChars[Math.floor(Math.random() * specialChars.length)];
    console.log(randomIndex)
    manditoryArr.push(randomIndex);
    console.log(manditoryArr)
    console.log(randomizedArr);
  }

  // if the user failed to select at least one of the options
  if (
    !lowercasePassword &&
    !uppercasePassword &&
    !numbersPassword &&
    !specialPassword
  ) {
    alert("You need to pick at least one.");
    return null;
  }

  // loop to get our new random password using the array we made above
  for (let i = 0; i < numOfChars; i++) {
    let randomizedArrItem = randomizedArr[Math.floor(Math.random() * randomizedArr.length)];
    newRandomPw.push(randomizedArrItem)
    console.log(newRandomPw);
  }

  // force the password to use at least one of every character type selected
  for (let i = 0; i < manditoryArr.length; i++) {
    newRandomPw[i] = manditoryArr[i];
    console.log('newRandomPw[i] =' + newRandomPw[i])
  }
  // enters our created password to this function for use with the function below
  return newRandomPw.join('');
}

// Assignment code
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  // display the password to the page
  passwordText.value = password;

}

function copyPassword() {
  let copyText = document.getElementById("password");

  // // Select the text field
  // copyText.select();
  // copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);