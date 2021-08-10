// Assignment code here
function generatePassword() {
  var newpassword = ""
  var possiblecharacters = []
  var alluppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var alllowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var specialcharacters = ["!", "@", "#", "$", "&", "*", "-", "_", "."]
  var numericvalues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var passwordlength = prompt("how many characters would you like your passwoed to be")
  while (passwordlength<8 || passwordlength>128){
     passwordlength = prompt("how many characters would you like your passwoed to be")
  }
  var includeuppercase = confirm("would yu like to include uppercase characters?")
  var includelowercase = confirm("would yu like to include lowercase characters?")
  var includespecialcharacters = confirm("would yu like to include special characters?")
  var includenumericvalues = confirm("would yu like to include numeric values?")
  while (includeuppercase === false&& includelowercase=== false&& includespecialcharacters=== false&& includenumericvalues=== false){
  includeuppercase = confirm("would yu like to include uppercase characters?")
  includelowercase = confirm("would yu like to include lowercase characters?")
  includespecialcharacters = confirm("would yu like to include special characters?")
  includenumericvalues = confirm("would yu like to include numeric values?")
  }
  
  if (includeuppercase) {
    possiblecharacters = possiblecharacters.concat(alluppercase)
  }
  if (includelowercase) {
    possiblecharacters = possiblecharacters.concat(alllowercase)
  }
  if (includespecialcharacters) {
    possiblecharacters = possiblecharacters.concat(specialcharacters)
  }
  if (includenumericvalues) {
    possiblecharacters = possiblecharacters.concat(numericvalues)
  }
  console.log(possiblecharacters)

  for (var i = 0; i < passwordlength; i++) {
    var randomindex = Math.floor(Math.random() * possiblecharacters.length)
    console.log(randomindex)
    newpassword = newpassword + possiblecharacters[randomindex]
  }
  console.log(newpassword)
return newpassword 







}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
