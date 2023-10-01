/*steps for this project
1. create prompts for password criteria including length and types of characters - will use prompts and confirms.
2. Create arrays containing all the possible characters for the password. Unsure how I will access these and incorporate into the function - research possibilities
2. Need to collect the input from prompts - use if...else statements possibly for when inputs are true vs false
3. Need to take the true choices and some how combine them. Research this. HAs to a way to reference and pull the info from the arrays. Do I need an Object to store the arrays? Unsure.
4. Need to connect the variable created for password length and apply it to the character arrays. Will I use mathFloor(math.Random()* length of the passwordLength so it would be passwordLength.length or the arrays? More research needed)
5. Final step is to store the password generated adn return that variable. I see passwordText.value = password so I'm assuming I will connect there. 
Many gaps between what I have to do and what I know how to do and what parts of javascript to use. Lots of research and support needed. 
*/
//how I will take the input from the user 
var passwordLength = 8;
var choiceArr = [];
//store all the possible characters I can use in my password in the choiceArr
var lowerCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specCharArr = ["!", "@", "#", "$", "%", "*", "(", ")", "_", "+", "=", "?", ">", "<"];

//I need to generate the password based on prompt but 1st I need to gather the information from the prompts. That will abe a different function. 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Write password to the #password input
function writePassword() {
  //getPrompts(); //true will create password, false password can't be generated. 
    var correctPrompts = getPrompts(); //when I execute getPrompts the result will become the variable correctPrompts
    var passwordText = document.querySelector("#password");
    
    if(correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
    } else {
      passwordText.value = "";
    }
}

function generatePassword() {
//I need to create the password based on the prompt responses
  var password = "";
  for(var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArr.length);
  password = password + choiceArr[randomIndex];
  }
  return password
}


  //Prompt to determine length of password. parseInt converts the response from a string to a number
function getPrompts(){
  //be sure to start each password session with and empty choiceArr or you will have duplicates.
  choiceArr = [];

  passwordLength = parseInt(prompt("How many characters would you like to use for your password? Choose between 8 to 128 characters."));

  //redirect to retry if length does not match criteria
  if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Your password needs to be a number between 8 and 128 characters in length. Please try again.")
    return false;
  } 
    // prompts set to confirms so user cannot type incorrect information. This information will become inputs for password.
  
  if (confirm("Click OK to use special characters in your password like !@#$%*()_+=?>< ")) {
    choiceArr = choiceArr.concat(specCharArr);
  }
  if (confirm("Click OK to use numbers in your password.")) {
    choiceArr = choiceArr.concat(numbersArr);
  }
  if (confirm("Click OK to use lowercase letters in your password.")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("Click OK to use uppercase letters in your password.")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  return true;
  
}

  // return //generated password



