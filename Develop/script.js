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
  //const getType = [
    function uppercaseGen() {
      return types.uppercase[
        Math.floor(Math.random() * types.uppercase.length)
      ];
    }
    function lowerCaseGen() {
      return types.lowerCase[
        Math.floor(Math.random() * types.lowerCase.length)
      ];
    }
    function numberGen() {
      return types.numbers[Math.floor(Math.random() * types.numbers.length)];
    }
    function symbolsGen() {
      return types.symbols[Math.floor(Math.random() * types.symbols.length)];
    }
 // ];
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
  let length = document.getElementById("charactersAmountRange").value;
  let pw = "";
  while (pw.length < length) {
    // let typeAdder = getType[match.floor(match.random() * getType.length)];
    // let isChecked = document.getElementById(typeAdder.name).checked;
    // if (isChecked) {
    //   pw += typeAdder();
    // }
    if(pw.length<length && number){
      pw += numberGen()
    }
    if(pw.length<length && uppercase){
      pw += uppercaseGen()
    }
    if(pw.length<length && lowerCase){
      pw += lowerCaseGen()
    }
    if(pw.length<length && symbols){
      pw += symbolsGen()
    }

  }
  console.log(pw,length)
 return pw;
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
