// Assignment Code
var generateBtn = document.querySelector("#generate"); // id of Generate Password button 

// DO NOT CHANGE
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// possible selections by character type
var numerical = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",  "U", "V", "W", "X", "Y", "Z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", "|", ".", "?", "\\"];
// we need an empty array to store whatever the user confirms
var userInputs = [];
password = [];

// my new code
function generatePassword() {
    // need user input to be a number btw or = to 8 and less or = to 128 and store it
    length = parseInt(prompt("How long do you want your password? please choose a number at least 8 and less than 128. Hint: Ok for Yes, Cancel for No"));

    console.log("the user chose " + length);

    if (!length) {
        alert("You must enter a numerical value. Try again.");  
        
    } else if (length < 8 || length > 128) {
        alert("Your password must be between 8 and 128 characters. Try again.");

    } else {
        var confirmNumerical = confirm("Would you like to include numbers?");
        var confirmLowerCase = confirm("Would you like to include lowercase letters?");
        var confirmUpperCase = confirm("Would you like to include uppercase letters?");
        var confirmSpecial = confirm("Would you like to include special characters?");
    };

    // make sure user selected at least one character type
    if (confirmNumerical === false &&
        confirmLowerCase === false && 
        confirmUpperCase === false &&
        confirmSpecial === false) {
            alert("You must use at least one kind of character - lower or UPPERCASE, number or special character. \nClick Generate Password button again and select at least one."
            );
    }

    // need to store the values from the character types that the user chose in a the empty array we created above -- userInputs
    if (confirmNumerical) {
        userInputs.push(numerical);
    };
    if (confirmLowerCase) {
        userInputs.push(lowerCase);
    };
    if (confirmUpperCase) {
        userInputs.push(upperCase);
    };
    if (confirmSpecial) {
        userInputs.push(special);
    };
    // values for each character type?
    console.log("number: " + confirmNumerical, "lowercase: " + confirmLowerCase, "uppercase: " + confirmUpperCase, "specialcharacters: " + confirmSpecial);

    // is the array saving these values?
    console.log("user inputs array: " + userInputs);  

    // loop through the diff character arrays based on number of characters and types of characters user chose
    for (var i = 0; i < length; i++) {
        
        // new array
        var randomArray;
        var chosenArray;
        var randomNumber;
        var randomCharacter;

        // chooses a single, random number that selects which array of characters to loop through
        // this will always be between 1 and 4; 4 possible arrays pushed to userInputs
        randomArray = Math.floor(Math.random() * userInputs.length); 
        console.log(randomArray + " is my randomly selected array");

        // randomArray determines which array of the 4 to select a character
        chosenArray = userInputs[randomArray];  
        console.log(chosenArray + " the characters in the array chosen");

        // determines random number to include all items in array, based on length of chosenArray
        randomNumber = Math.floor(Math.random() * chosenArray.length);
        console.log(randomNumber + " is the randomly selected position in the array"); 

        randomCharacter = chosenArray[randomNumber]; // takes random number from above var and uses it to select a character from the array chosen

        password += randomCharacter; // adds this randomly chosen character to password array until length is satisfied
        
    }
    
    return password; // once loop completes, returns array of random characters to password variable
        
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

