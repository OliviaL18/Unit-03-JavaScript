var generateBtn = document.querySelector("#generate");
var passwordLength = document.querySelector("#length");
var lengthBtn = document.querySelector("#length-btn");
var passwordArea = document.querySelector("#password");

var randomString = Math.random().toString(36).substring(2, 8); 

var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerLetterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharArray = ["!","#","$","%","&","(",")","*","+","-",".","<","=",">","?","@","[","`","^","_","{","|","}","~",":",";"];

var indexLetterChar = Math.floor(Math.random() * Math.floor(27));
var indexNumber = Math.floor(Math.random() * Math.floor(11));

var number = numberArray[indexLetterChar];
var lowerLetter = lowerLetterArray[indexLetterChar];
var upperLetter = upperLetterArray[indexLetterChar];
var specialChar = specialCharArray[indexLetterChar];

var miniString = lowerLetter + upperLetter + specialChar + number;
	console.log(miniString);

var length;

generateBtn.addEventListener("click", generatePasword);

function generatePasword(){
	event.preventDefault();
	var lengthInput = passwordLength.value;
	if (isNaN(lengthInput) || lengthInput<8 || lengthInput>128){
		alert("Please enter a number between 8 and 128.")
	} else {
	var length = parseInt(lengthInput);
	passwordArea.innerHTML = miniString;
	}
}

