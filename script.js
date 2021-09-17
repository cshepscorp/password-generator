// Assignment Code
var generateBtn = document.querySelector("#generate");

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
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "-", "=", "[", "]", "{", "}", ";", "'", ":", "|", ".", "?"];
// we need an empty array to store whatever the user confirms
var userInputs = [];

// my new code
function generatePassword() {
    // need user input to be a number btw or = to 8 and less or = to 128 and store it
    length = parseInt(prompt("How long do you want your password? please choose a number at least 8 and less than 128. Hint: Ok for Yes, Cancel for No"));

    console.log("the user chose " + length);
    console.log(typeof length);
    if (!length) {
        alert("You must enter a value. Try again.");  
        
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
    if (confirmLowerCase) {
        userInputs.push(special);
    };
    // values for each character type?
    console.log("number: " + confirmNumerical, "lowercase: " + confirmLowerCase, "uppercase: " + confirmUpperCase, "specialcharacters: " + confirmLowerCase);

    // is the array saving these values?
    console.log("user inputs array: " + userInputs);  

    // arrayRandom = (Math.floor(Math.random() * userInputs.length));
    for (let i = 0; i < length - 1; i++) {
        counter = length;
        
        // new array
        let randomNumber;
        let whichArray;
        let randomIndex;
        let randomCharacter;

        // chooses a single, random number that selects which array of characters to loop through
        // this will always be between 1 and 4; 4 possible arrays pushed to userInputs
        randomNumber = Math.floor(Math.random() * userInputs.length);
        console.log(randomNumber + " is my randomly selected number");

        whichArray = userInputs[randomNumber];
        console.log(whichArray + " is the array of characters chosen");

        randomIndex = Math.floor(Math.random() * whichArray.length);
        console.log(randomIndex + " is the randomly selected position in the array");

        randomCharacter = whichArray[randomIndex];
        console.log(randomCharacter + " is randomly selected character");

        password += randomCharacter;
        
    }
    return password;
    
}

password = [0];
localStorage.clear();

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

