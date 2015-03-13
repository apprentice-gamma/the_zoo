var sget = require("sget");

function getUserInput(message) {
	return sget(message).trim();
}

function Animal (name, species, size, gender){
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;

	this.displayName = function(){
    	console.log(this.name);
	};

	this.displayAnimalInfo = function(){
    	console.log("Animal Information\n  name:%s\n  species:%s\n  size:%s\n  gender:%s\n", this.name, this.species, this.size, this.gender);
	};
};

function Pen (){
	this.animals = [];

	this.addAnimal = function (name, species, size, gender) {
		console.log("Adding %s to this pen.", name);
		this.animals.push(new Animal(name, species, size, gender));
	};
	// call this method like this this.addEntry(getUserInput("Please enter a Name "), getUserInput("Phone Number "), getUserInput("Address"));

	this.listAnimals = function(){
		for (var i = 0; i < this.animals.length; i++) {
			this.animals[i].displayName();
		};
	};

	this.getAnimalIndex = function(query){
		for (var i = 0; i < this.animals.length; i++) {
			if (query.toLowerCase() === this.animals[i].name.toLowerCase()) {
				return i;
			};			
		};
		console.log("Animal not found.");
		return -1;
	//refactor to use any property ie. function(query,property)	
	};

	this.delete = function(){
		var animalIndex = this.getAnimalIndex(getUserInput("Name the animal you would like to delete."));
		if (animalIndex === -1)
	}
};

function Zoo (){
	var pens = []
};

var penOne = new Pen();

penOne.addAnimal(getUserInput("Please enter a Name "), getUserInput("species "), getUserInput("size"), getUserInput("gender"));

penOne.listAnimals();







