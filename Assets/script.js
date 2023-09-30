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
function generatePassword() {
  //creating prompts for inputs 
  var passwordLength = prompt("How many characters would you like to use for your password?");
  var specChar = prompt("Click OK to use special characters in your password like !@#$%*()_+=?>< ");
  var numbers = prompt("Click OK to use numbers in your password.");
  var lowerCase = prompt("Click OK to use lowercase letters in your password.");
  var upperCase = prompt("Click OK to use uppercase letters in your password.");













  return //generated password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
