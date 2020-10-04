// Assignment Code
var generateBtn = document.querySelector("#generate");
//Variable arrays
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var specialChar = "!@#$%^&*()-_=+[{}]|\;:'<>?/,.".split("");
var numbers = "1234567890".split("");
var newArray =[];

console.log(upperCase);
console.log(lowerCase);
console.log(specialChar);
console.log(numbers);

// Write password to the #password input
function generatePassword() {
var CharNum = prompt("Please select a number between 8 and 128 for the character length of your password.");
CharNum = parseInt(CharNum);
  if (CharNum >=8 && CharNum <=128); {
    console.log(CharNum)
  } else {
    alert("You did not select a number between 8 and 128. Try again.");
    return;
  }
{   
// Confirms the user would like uppercase letters included in password. 
var upperCase = confirm("Would you like to include uppercase letters?");
  if(upperCase){
newArray = newArray.concat(upperCase);
console.log(newArray);
}

// Confirms the user would like lowercase letters included in password. 
var lowerCase = confirm("Would you like to include lowercase letter?");
  if(lowerCase){
newArray = newArray.concat(lowerCase)
console.log(newArray);
}

// Confirms the user would like special characters included in password. 
var specialChar = confirm("Would you like to include special characters?");
  if(specialChar){
  newArray = newArray.concat(specialChar)
  console.log(newArray);
}

// Confirms the user would like numbers included in password.
var numbers = confirm("Would you like to include numbers?");
  if(numbers){
newArray = newArray.concat(numbers)
console.log(newArray);
}

// If the user did not make any selections.
if (!lowerCase && !upperCase && !specialChar && !numbers){
  alert("You did not make a selection. Please try again.")
  return;  
}

var password = []
for (i = 0; i < CharNum; i++) {
  password.push(newArray[Math.floor(Math.random() *newArray.length)]);
 }
 return password.join("");
}

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
