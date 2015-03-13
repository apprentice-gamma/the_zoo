var sget = require('sget');

function getInput(message, verification) {
	var verified = false;
	var input = undefined; 

	while(!verified) {
		input = sget(message).trim(); 
		if (verification !== undefined) {
			verified = verifyInput(input.toLowerCase(), verification);
		} else {
			verified = true;
		}
	}
	return input;
}

function verifyInput(input, verification) {
	if(typeof(verification[0]) === 'number') {
		input = Number(input);
	}

	if (verification.indexOf(input) !== -1) {
		return true;
	} else {
		return false;
	}
	return false;
}