// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// const types = {
//   upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   lowerCase: "abcdefghijklmnopqrstuvwxyz",
//   numbers: "0123456789",
//   symbols: "!@#$%*()_+=?><"
// }
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var lowerCase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "@", "#", "$", "%", "*", "(", ")", "_", "+", "=", "?", ">", "<"];

function generatePassword() {
  //creating prompts and names for inputs 
  var passwordLength = prompt("How many characters would you like to use for your password?");
  var specCharInput = prompt("Click OK to use special characters in your password like !@#$%*()_+=?>< ");
  var numbersInput = prompt("Click OK to use numbers in your password.");
  var lowerCaseInput = prompt("Click OK to use lowercase letters in your password.");
  var upperCaseInput = prompt("Click OK to use uppercase letters in your password.");

  //get random index from array of options and pull them from the arrays above
var lowerCaseIndex = Math.floor(Math.random() * lowerCase.length);
var lowerChoices = lowerCase[lowerCaseIndex];
var upperCaseIndex = Math.floor(Math.random() * upperCase.length);
var upperChoices = upperCase[upperCaseIndex];
var numbersIndex = Math.floor(Math.random() * numbers.length);
var numbersChoices = numbers[numbersIndex];
var specCharIndex = Math.floor(Math.random() * specChar.length);
var specCharChoices = specChar[specCharIndex];

  if (upperCaseInput === true) {
    return console.log(upperChoices);
    
  }
  // const types = {
    //   upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    //   lowerCase: "abcdefghijklmnopqrstuvwxyz",
    //   numbers: "0123456789",
    //   symbols: "!@#$%*()_+=?><"
    // }

    // idea for deciding what to include in the 











  // return //generated password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
