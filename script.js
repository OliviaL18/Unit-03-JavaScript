var passwordLength = document.querySelector("#length");
var includeLowerCheck = document.querySelector("#includeLower");
var includeUpperCheck = document.querySelector("#includeUpper");
var includeNumberCheck = document.querySelector("#incluedNumber");
var includeSpecCheck = document.querySelector("#includeSpecial");
var passwordArea = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

var numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lowerLetterArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetterArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialCharArray = ["!","#","$","%","&","(",")","*","+","-",".","<","=",">","?","@","[","`","^","_","{","|","}","~",":",";"];

var inputTypeCount = 0;

includeLowerCheck.addEventListener("click", includeLower);
includeUpperCheck.addEventListener("click", includeUpper);
includeNumberCheck.addEventListener("click", includeNumber);
includeSpecCheck.addEventListener("click", includeSpecial);

function includeLower(){
	if (includeLowerCheck.checked == true){
		inputTypeCount++;
	} else {
		inputTypeCount--;
	}
};
function includeUpper(){
	if (includeUpperCheck.checked == true){
		inputTypeCount++;
	} else {
		inputTypeCount--;
	}
};
function includeNumber(){
	if (includeNumberCheck.checked == true){
		inputTypeCount++;
	} else {
		inputTypeCount--;
	}
};
function includeSpecial(){
	if (includeSpecCheck.checked == true){
		inputTypeCount++;
	} else {
		inputTypeCount--;
	}
};

generateBtn.addEventListener("click", generatePasword);
generateBtn.addEventListener("click", generatePasword);
generateBtn.addEventListener("click", generatePasword);
generateBtn.addEventListener("click", generatePasword);

generateBtn.addEventListener("click", generatePasword);

function generatePasword(){
	event.preventDefault();
	var indexNumber = Math.floor(Math.random() * 10);
	var indexLower = Math.floor(Math.random() * 26);
	var indexUpper = Math.floor(Math.random() * 26);
	var indexSpec = Math.floor(Math.random() * 26);
	var lengthInput = passwordLength.value;
	if (isNaN(lengthInput) || lengthInput<8 || lengthInput>128){
		alert("Please enter a number between 8 and 128.")
	} else {
	var length = parseInt(lengthInput);
	if (includeNumberCheck.checked == true){
		var number = numberArray[indexNumber];
			console.log(number);
	} else {
		var number = "";
	};
	if (includeLowerCheck.checked == true){
		var lowerLetter = lowerLetterArray[indexLower];
	} else {
		var lowerLetter = "";
	};
	if (includeUpperCheck.checked == true){
		var upperLetter = upperLetterArray[indexUpper];
	} else {
		var upperLetter = "";
	};
	if (includeSpecCheck.checked == true){
		var specialChar = specialCharArray[indexSpec];
	} else {
		var specialChar = "";
	};
	var miniString = lowerLetter + upperLetter + specialChar + number;

	passwordArea.innerHTML = miniString;
	}
}


