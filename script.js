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

// Else if for 4 criteria selected
else if (checkOtherChoices && checkNumbersWanted && checkUpperWanted && checkLowerWanted) {
    userSelection = otherChoicesList.concat(numberOptionsList, alphabetsList, convertToUpper);
  }
 // Else if for 3 criteria selected
 else if (checkOtherChoices && checkNumbersWanted && checkUpperWanted) {
    userSelection = otherChoicesList.concat(numberOptionsList, convertToUpper);
  }
  else if (checkOtherChoices && checkNumbersWanted && checkLowerWanted) {
    userSelection = otherChoicesList.concat(numberOptionsList, alphabetsList);
  }
  else if (checkOtherChoices && checkLowerWanted && checkUpperWanted) {
    userSelection = otherChoicesList.concat(alphabetsList, convertToUpper);
  }
  else if (checkNumbersWanted && checkLowerWanted && checkUpperWanted) {
    userSelection = numberOptionsList.concat(alphabetsList, convertToUpper);
  }

 // Else if for 2 criteria selected
 else if (checkOtherChoices && checkNumbersWanted) {
    userSelection = otherChoicesList.concat(numberOptionsList);
  
  } else if (checkOtherChoices && checkLowerWanted) {
    userSelection = otherChoicesList.concat(alphabetsList);
  
  } else if (checkOtherChoices && checkUpperWanted) {
    userSelection = otherChoicesList.concat(convertToUpper);
  }
  else if (checkLowerWanted && checkNumbersWanted) {
    userSelection = alphabetsList.concat(numberOptionsList);
  
  } else if (checkLowerWanted && checkUpperWanted) {
    userSelection = alphabetsList.concat(convertToUpper);
  
  } else if (checkNumbersWanted && checkUpperWanted) {
    userSelection = numberOptionsList.concat(convertToUpper);
  }

// Else if for 1 criteria selected
else if (checkOtherChoices) {
    userSelection = otherChoicesList;
  }
  else if (checkNumbersWanted) {
    userSelection = numberOptionsList;
  }
  else if (checkLowerWanted) {
    userSelection = alphabetsList;
  };
  
// Random selection for all choices
let createdPassword = [];

    for (let i = 0; i < clickGeneratePassword; i++) {
      let selectValues = userSelection[Math.floor(Math.random() * userSelection.length)];
      createdPassword.push(selectValues);
    }

// Convert choices into string
let joinAndCreate = createdPassword.join("");
chosenInputs(joinAndCreate);
return joinAndCreate;
}
