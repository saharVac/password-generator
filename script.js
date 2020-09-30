// Assignment Code
var generateBtn = document.querySelector("#generate");

// PASSWORD GENERATING FUNCTION
// defined before used
function generatePassword() {
  // initializing password length to not long enough
  var length = 0;
  // take in password length, if not between 8-128, ask again
  while (length < 8 || length > 128) {
    length = prompt(
      "How many characters long do you want your password? (between 8-128, inclusive)"
    );
  }

  // initializing character types to not selected
  var includeLower = false;
  var includeUpper = false;
  var includeNumeric = false;
  var includeSpecial = false;

  // initializing list of desired characters
  var desiredChars = [];

  // Making sure at least one character type is selected
  while (!includeLower && !includeUpper && !includeNumeric && !includeSpecial) {
    alert("Choose at least one character type to include in the password");
    // does the user want lowercase characters?
    if (confirm("Include lowercase characters?")) {
      includeLower = true;
      // include lowercase
      desiredChars.concat(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    }

    // does the user want uppercase characters?
    if (confirm("Include uppercase characters?")) {
      includeUpper = true;
      // include uppercase
      desiredChars.concat(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
    }
    // does the user want numeric characters?
    if (confirm("Include numeric characters?")) {
      includeNumeric = true;
      // include numeric
      desiredChars.concat(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]);
    }
    // does the user want special characters?
    includeSpecial = confirm("Include special characters?");
    // include special
    desiredChars.concat([" ", "!",
      '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"]);
  }

  // initializing password
  var pass = "";
  // iterating over password length to add characters
  for (let i = 0; i < length; i++) {
    // get random index from desired characters
    var ind = Math.floor(Math.random() * desiredChars.length);
    Math.
      // add character to password
      pass += desiredChars[ind];
  }

  return desiredChars;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
