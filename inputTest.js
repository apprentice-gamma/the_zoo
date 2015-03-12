var sget = require('sget');

function getInput(message, verification) {
	var verified = false;
	var input = undefined; 

	while(!verified) {
		input = sget(message).trim().toLowerCase(); 
		console.log("Test");
		if (verification !== undefined) {
			console.log("needs to verify");
			verified = verifyInput(input, verification);
			console.log(")))" + verified);
		} else {
			verified = true;
		}
	}
	console.log ("LOOP ENDED");
	return input;
}

function verifyInput(input, verification) {
	if (verification.indexOf(input) !== -1) {
		console.log("will return true");
		return true;
	} else {
		console.log("Invalid entry, please try again");
		return false;
	}
	return false;
}

console.log(getInput("Get Input", ['a', 'b', 'c']));