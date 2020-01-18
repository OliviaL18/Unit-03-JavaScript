var passwordLength = document.querySelector("#length");
var includeLowerCheck = document.querySelector("#includeLower");
var includeUpperCheck = document.querySelector("#includeUpper");
var includeNumberCheck = document.querySelector("#incluedNumber");
var includeSpecialCheck = document.querySelector("#includeSpecial");
var passwordArea = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerLetterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharArray = ["!","#","$","%","&","(",")","*","+","-",".","<","=",">","?","@","[","`","^","_","{","|","}","~",":",";"];
var indexLetterChar = Math.floor(Math.random() * 26);
var indexNumber = Math.floor(Math.random() * 10);
var number = numberArray[indexNumber];
var lowerLetter = lowerLetterArray[indexLetterChar];
var upperLetter = upperLetterArray[indexLetterChar];
var specialChar = specialCharArray[indexLetterChar];

var length;

generateBtn.addEventListener("click", generatePasword);

function generatePasword(){
	event.preventDefault();
	var lengthInput = passwordLength.value;
	if (isNaN(lengthInput) || lengthInput<8 || lengthInput>128){
		alert("Please enter a number between 8 and 128.")
	} else {
	var length = parseInt(lengthInput);
	var miniString = lowerLetter + upperLetter + specialChar + number;
	passwordArea.innerHTML = miniString;
	}
}

