var generateBtn = document.querySelector("#generate");
var passwordLength = document.querySelector("#length");
var lengthBtn = document.querySelector("#length-btn");
var passwordArea = document.querySelector("#password");

var randomString = Math.random().toString(36).substring(2, 8); 
var capLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharArray = ["!","#","$","%","&","(",")","*","+","-",".","<","=",">","?","@","[","`","^","_","{","|","}","~",":",";"];
var selectCapChar = Math.floor(Math.random() * Math.floor(27));
var capLetter = capLetterArray[selectCapChar];
var specialChar = specialCharArray[selectCapChar];
var fullString = randomString + capLetter + specialChar;
	console.log(fullString);

var length;

generateBtn.addEventListener("click", generatePasword);

function generatePasword(){
	event.preventDefault();
	var input = passwordLength.value;
	if (isNaN(input) || input<8 || input>128){
		alert("Please enter a number between 8 and 128.")
	} else {
	var length = parseInt(input);
	passwordArea.innerHTML = fullString;
	}
}

