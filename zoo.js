var sget = require("sget");

function getUserInput(message) {
	return sget(message).trim();
}

function Animal (name, species, size, gender){
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;
};

function Pen (){
	var animals = [];

	this.addAnimal = function (name, species, size, gender) {
		console.log("Adding %s to this pen.", name);
		this.entries.push(new Animal(name, species, size, gender));
	};
	// call this method like this this.addEntry(getUserInput("Please enter a Name "), getUserInput("Phone Number "), getUserInput("Address"));
};

var penOne = new Pen();

penOne.addAnimal(getUserInput("Please enter a Name "), getUserInput("species "), getUserInput("size"), getUserInput("gender"));