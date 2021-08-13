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

