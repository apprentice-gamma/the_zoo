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

function Pen (penID){
	this.penID = penID
	this.animals = [];

	this.displayID = function(){
    	console.log("Pen #" + this.penID);
	};

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
		return -1;
	//refactor to use any property ie. function(query,property)	
	};

	this.deleteAnimal = function(){
		var animalIndex = this.getAnimalIndex(getUserInput("Name the animal you would like to delete."));
		if (animalIndex === -1){
			console.log("Animal not found.");
			return this.delete();
		}else {
			console.log("Removing %s from this pen.", this.animals[animalIndex].name);
			this.animals.splice(animalIndex,1);

		}
	}
};

function Zoo (){
	this.pens = [];
	this.addPen = function (penID) {
		console.log("Adding pen #%s to the Zoo.", penID);
		this.pens.push(new Pen(penID));
	};
	// call this method like this this.addEntry(getUserInput("Please enter a Name "), getUserInput("Phone Number "), getUserInput("Address"));

	this.listPens = function(){
		for (var i = 0; i < this.pens.length; i++) {
			this.pens[i].displayID();
		};
	};

	this.getPenIndex = function(query){
		for (var i = 0; i < this.pens.length; i++) {
			if (query === this.pens[i].penID) {
				return i;
			};			
		};
		return -1;
	//refactor to use any property ie. function(query,property)	
	};

	this.deletePen = function(){
		var penIndex = this.getPenIndex(getUserInput("What is the ID of the pen you would like to delete?"));
		if (penIndex === -1){
			console.log("pen not found.");
			return this.deletePen();
		}else {
			console.log("Removing pen #%s from the Zoo.", this.pens[penIndex].penID);
			this.pens.splice(penIndex,1);

		}
	}
};

var penOne = new Pen(01);

var bestZoo = new Zoo;

//penOne.addAnimal(getUserInput("Please enter a Name "), getUserInput("species "), getUserInput("size"), getUserInput("gender"));

bestZoo.addPen('01');

bestZoo.addPen('15');

bestZoo.listPens();

bestZoo.deletePen();

bestZoo.listPens();

bestZoo.pens[0].addAnimal("Fred", "Moose", "Great Big", "M");

bestZoo.pens[0].listAnimals();

bestZoo.pens[0].deleteAnimal();

bestZoo.pens[0].listAnimals();





