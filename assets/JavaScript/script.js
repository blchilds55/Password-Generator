// Assignment code here


// Get references to the #generate element
var generate = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter a value between 8 and 128 for the password length: ");

  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("The chosen password length value was out of range. Please choose a number between 8 and 128: ");
  }

  var lower = confirm("Confirm whether you want lowercases in the password.");
  var upper = confirm("Confirm whether you want uppercases in the password.");
  var numeric = confirm("Confirm whether you want numbers in the password.");
  var special = confirm("Confirm whether you want special characters in the password.");

  while (!lower && !upper && !numeric && !special) {
    window.alert("You must have at least one choice included in your password.");

    var lower = confirm("Confirm whether you want lowercases in the password.");
    var upper = confirm("Confirm whether you want uppercases in the password.");
    var numeric = confirm("Confirm whether you want numbers in the password.");
    var special = confirm("Confirm whether you want special characters in the password.");
  }

  var characters_string = "";
  var length = 0;
  var password = "";
  var add_from_string = "";

  
}
