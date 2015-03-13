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

	this.seeAnimals = function(){
		for (var i = 0; i < this.animals.length; i++) {
			this.animals[i].displayAnimalInfo();
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
		if (this.getPenIndex(penID) !== -1) {
			console.log("Adding pen #%s to the Zoo.", penID);
			this.pens.push(new Pen(penID));
		} else{
			console.log("The pen #%s has already been built!", penID);
		}
	};
	// call this method like this this.addEntry(getUserInput("Please enter a Name "), getUserInput("Phone Number "), getUserInput("Address"));

	this.listAllAnimals = function(){
		for (var i = 0; i < this.pens.length; i++) {
			this.pens[i].listAnimals();
		};
	};

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

	this.goToPen = function(){
		console.log("These are the pens in this Zoo.")
		this.listPens();
		var penIndex = this.getPenIndex(getUserInput("What is the ID of the pen you would like to visit?"));
		if (penIndex === -1){
			console.log("pen not found.");
			return this.goToPen();
		}else {
			console.log("Here are the animals in pen #%s.", this.pens[i].penID);
			this.pens[i].seeAnimals();
		}
	};

	this.deletePen = function(){
		console.log("These are the pens in this Zoo.")
		this.listPens();
		var penIndex = this.getPenIndex(getUserInput("What is the ID of the pen you would like to delete?"));
		if (penIndex === -1){
			console.log("pen not found.");
			return this.deletePen();
		}else {
			console.log("Removing pen #%s from the Zoo.", this.pens[penIndex].penID);
			this.pens.splice(penIndex,1);

		}
	}
	this.userMenu = function(){
		var userMenuChoice = getUserInput("Welcome Zookeeper to the Best Zoo!\n What would you like to today?\n Enter number or exit\n 1- See the all the animals\n 2- See the pens \n 3- Visit a pen\n 4- Build a pen\n 5- Tear down a pen\n 6- Buy a new animal\n 7- Send an animal away\n exit- to go home\n");

		switch (userMenuChoice){
			case "1":
				console.log("OK, see the all the animals.");
				this.listAllAnimals();
				return this.userMenu();
				break;
			case "2":
				console.log("OK, see the pens.");
				this.listPens(); 
				return this.userMenu();
				break;
			case "3":
				console.log("OK, visit a pen.");
				this.goToPen;
				return this.userMenu(); 				 
				break;
			case "4":
				console.log("OK, build a pen.");
				this.addPen(getUserInput("Please enter a new ID for your new pen.")) 
				return this.userMenu();				 
				break;
			case "5":
				console.log("OK, tear down a pen.");
				this.deletePen(); 
				return this.userMenu();				 
				break;	
			case "6":
				console.log("OK, buy a new animal.");
				this.deleteEntry(); 
				return this.userMenu();				 
				break;
			case "7":
				console.log("OK, send an animal away.");
				this.deleteEntry(); 
				return this.userMenu();				 
				break;						
			case "exit":
				console.log("Goodbye. See you tomorrow!");
				break;
			default:
				console.log("Invalid request. Please try again.");
				return this.userMenu();
				break;
		};
	}
};

var bestZoo = new Zoo;

bestZoo.userMenu();

//penOne.addAnimal(getUserInput("Please enter a Name "), getUserInput("species "), getUserInput("size"), getUserInput("gender"));

// bestZoo.addPen('01');

// bestZoo.addPen('15');

// bestZoo.listPens();

// bestZoo.deletePen();

// bestZoo.listPens();

// bestZoo.pens[0].addAnimal("Fred", "Moose", "Great Big", "M");

// bestZoo.pens[0].listAnimals();

// bestZoo.pens[0].deleteAnimal();

// bestZoo.pens[0].listAnimals();





