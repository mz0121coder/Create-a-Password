// Main variables
let clickGeneratePassword;
let checkNumbersWanted;
let checkOtherChoices;
let checkUpperWanted;
let checkLowerWanted;
// Arrays for user choices
alphabetsList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
numberOptionsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
otherChoicesList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

let userSelection;

let bigCharacters = function (lettersInput) {
  return lettersInput.toUpperCase();
};
convertToUpper = alphabetsList.map(bigCharacters);

let generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function () {
  joinAndCreate = makeUniquePassword();
  document.getElementById("password").placeholder = joinAndCreate;
});

function makeUniquePassword() {
    // User prompts begin
      clickGeneratePassword = parseInt(prompt("How many characters do you want in your password?"));
      
      if(!clickGeneratePassword) {
        alert("Select at least one option to generate a password");
      } else if (clickGeneratePassword <8 || clickGeneratePassword > 128) {
    
        clickGeneratePassword = parseInt(prompt("must be between 8 and 128 characters"));
      }
        
     else {
  // Continue questions once validated
  checkNumbersWanted = confirm("Numbers letters - click OK to include, or cancel to leave out");
  checkOtherChoices = confirm("Special Characters - click OK to include, or cancel to leave out");
  checkUpperWanted = confirm("Uppercase letters - click OK to include, or cancel to leave out");
  checkLowerWanted = confirm("Lowercase letters - click OK to include, or cancel to leave out");
};

if (!checkOtherChoices && !checkNumbersWanted && !checkUpperWanted && !checkLowerWanted) {
  userSelection = alert("Select at least one option to generate a password");
}

