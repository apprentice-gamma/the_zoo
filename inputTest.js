var sget = require('sget');

function getInput(message, verification) {
	var varified = false;
	var input = undefined; 

	while(!varified) {
		input = sget(message).trim().toLowerCase(); 
		if (verification !== undefined) {
			verified = verifyInput(input, verification);
		} else {
			verified = true;
		}
	}
	return input;
}

function verifyInput(input, verification) {
	if (verification.indexOf(input) !== -1) {
		return true;
	} else {
		console.log("Invalid entry, please try again");
		return false;
	}
	return false;
}

console.log(getInput("Get Input", ['a', 'b', 'c']));