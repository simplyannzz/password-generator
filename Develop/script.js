// Assignment code here

// to make sure if the checkbox is checked
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  const types = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "0123456789",
    symbols: "!@#$%^&*()_+~`|}{[]:;?><,./-=",
  };
  // to randomly select types
  const getType = [
    function uppercase() {
      return types.uppercase[
        Math.floor(math.random() * types.uppercase.length)
      ];
    },
    function lowerCase() {
      return types.lowerCase[
        Math.floor(math.random() * types.lowerCase.length)
      ];
    },
    function number() {
      return types.numbers[Math.floor(math.random() * types.numbers.length)];
    },
    function symbols() {
      return types.symbols[Math.floor(math.random() * types.symbols.length)];
    },
  ];
  // to see if the checkbox is checked
  let number = document.getElementById("includenumbers").checked;
  let symbols = document.getElementById("includesymbols").checked;
  let uppercase = document.getElementById("includeuppercase").checked;
  let lowerCase = document.getElementById("includelowercase").checked;

console.log (number)
  if (!number  && !symbols && !uppercase && !lowerCase ) {
    alert(" No box chosen. Please select at least one!");
    return;
  }
  let passwordbox = document.getElementById("password");
  let length = document.getElementById("length");
  let pw = "";
  while (pw.length < length.value) {
    let typeAdder = getType[match.floor(match.random() * getType.length)];
    let isChecked = document.getElementById(typeAdder.name).checked;
    if (isChecked) {
      pw += typeAdder();
    }
  }
  passwordbox.innerHTML = pw;
}

//not sure what to do here lol

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
