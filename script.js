// Assignment Code
var generateBtn = document.querySelector("#generate");

//the criteria 
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialChars = ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
"~", "*", "?", ":","\"","\\"];

// declare the criteria variables outside of 
// the function confirmations (global vs local variables). 
var confirmNumbers = false;
var confirmUpperLetters = false; 
var confirmSpecialChars = false;
var confirmLength = 8;  

//declare array which will contain all confirmed critera
//should already have lower case letters. 
var confirmedArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//password 
var password = '';

//add the prompts 
function generatePassword() {
    //confirming with user through prompts
    confirmNumbers = confirm('Do you want your password to include numbers'); 
    confirmUpperLetters = confirm('Do you want your password to include Upper Letters?'); 
    confirmSpecialChars = confirm('Do you want your password to include Special Characters?'); 
    console.log(confirmNumbers,confirmUpperLetters,confirmSpecialChars);

    confirmLength = prompt('How long would you like your password? Password must be between 8 - 129', "Enter Length"); 
    console.log(confirmLength); 

    //adding all confirmed criteria to confirmedArray
    if(confirmLength < 8 || confirmLength > 128) {
        confirmLength = prompt('Pleae select another length. Make sure it is in the range 8 to 128', "Enter Length"); 
    };

    if(confirmNumbers === true) {
       confirmedArray = confirmedArray.concat(numbers);
    }
    if(confirmUpperLetters === true) {  
        confirmedArray =  confirmedArray.concat(upperLetters); 
    }
    if(confirmSpecialChars === true) {
        confirmedArray = confirmedArray.concat(specialChars); 
    }
    console.log(confirmedArray);

    //password generator 
    for(var i=0; i < confirmLength; i++) {
       password = password + confirmedArray[Math.floor(Math.random() * confirmedArray.length)] 
       console.log(password); 
    }
    return password; 
}

// Write password to the #password input
function writePassword() { 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);