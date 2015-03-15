var sget = require('sget');

function Animal(name, species, size, gender) {
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;
	this.viewAnimal = function() {
		return console.log(this.name + "is a " + this.species + " ." + "The animal is a " + this.size + " animal. " + "It is a " + this.gender + ".");
	}
}

 var panda = new Animal("bamboo bond", "panda", "large", "male");
 panda.viewAnimal();

function Pen(name) {
	this.name = name;
	this.animalArray = [];
	this.addAnimal = function(animal) {
		this.animalArray.push(animal);
	};
	this.viewPen = function() {
		console.log("In " + this.name + " is: ");
		this.animalArray.forEach(function(animal){
			animal.viewAnimal();
		});
	};
	this.deleteAnimal = function(animalName) {
		var animalIndex = false;
		this.animalArray.forEach(function(animal, index) {
			if (animal.name === animalName) {
				return animalIndex = index;
			} 
		});
		if (animalIndex === false) {
			console.log("Please enter valid animal.");
		} else {
			this.animalArray.splice(animalIndex, 1);
		}
	};
	this.findAnimal = function(animalName) {
		var foundAnimal = false
		this.animalArray.forEach(function(animal) {
			if (animal.name === animalName) {
				return foundAnimal = animal;
			}  
		});
		return foundAnimal;
	};

}

 //var pandaPen = new Pen("Panda Pen");
 //pandaPen.addAnimal(panda);
 //pandaPen.viewPen();
 //pandaPen.deleteAnimal("bamboo bond");
// pandaPen.viewPen();

function Zoo(name) {
	this.name = name;
	this.holdingPen = [];
	this.penArray = [];
	this.addPen = function(pen) {
		this.penArray.push(pen);
	};
	this.viewZoo = function() {
		console.log("In " + this.name + " is these Animals:");
		this.penArray.forEach(function(pen){
			pen.viewPen();
		});
		this.viewHoldingPen();
		};
	this.viewHoldingPen = function(){
		console.log("In the Holding Pen is: ");
		this.holdingPen.forEach(function(animal){
			animal.viewAnimal();
		});
	};

	this.viewPen = function(penName) {
		var currentPen = this.findPen(penName);
		if (penName === "HOLDING PEN") {
			this.viewHoldingPen();
		}else if (currentPen === false) {
			console.log("Pen is not found");
		} else {
			currentPen.viewPen();
		}
	};
	this.findPen = function(penName) {
		var foundPen = false;
		this.penArray.forEach(function(pen) {
			if (pen.name === penName) {
				return foundPen = pen;
			}
		});
		return foundPen;
	};
	this.deletePen = function(penName) {
		var penIndex = this.penArray.indexOf(this.findPen(penName));
		if (penIndex === -1) {
			console.log("Please enter valid pen.");
		} else {
			this.penArray.splice(penIndex, 1);
		}
	};
	this.findAnimalInHolding = function(animalName){
		var foundAnimal = false;
		this.holdingPen.forEach(function(animal) {
			if (animal.name === animalName) {
				return foundAnimal = animal;
			}  
		});
		return foundAnimal;
	};
	this.addAnimalInPen = function(animalName, penName) {
		var foundAnimal = this.findAnimalInHolding(animalName);
		var foundPen = this.findPen(penName); 
		if (foundAnimal === false || foundPen === false) {
			console.log("Please enter a valid entry.");
		} else {
			foundPen.animalArray.push(foundAnimal);
			var animalIndex = this.holdingPen.indexOf(foundAnimal);
			this.holdingPen.splice(animalIndex, 1);
		};
	};
	this.removeAnimalFromPen = function(animalName, penName) {
		var foundPen = this.findPen(penName);
		if (foundPen === false) {
			console.log("Error");
		} else {
			var foundAnimal = foundPen.findAnimal(animalName);
			if (foundAnimal === false) {
				console.log("Please enter a valid entry.");
			} else {
				this.holdingPen.push(foundAnimal);
				var animalIndex = foundPen.animalArray.indexOf(foundAnimal);
				foundPen.animalArray.splice(animalIndex, 1);
			}
		}
	};
}

 //var happyZoo = new Zoo("Happy's Zoo");
 //happyZoo.addPen(pandaPen);
 //happyZoo.viewZoo();
 //happyZoo.viewPen("Panda Pen");
// happyZoo.deletePen("Panda Pen");
// happyZoo.viewZoo();
var zooKeeper = {
	createZoo: function() { 
		var input = this.getInput('What would you like to call your zoo?');
		this.currentZoo = new Zoo(input);
	},
	createPen: function() {
		var input = this.getInput('What would you like to call your pen?');
			var currentPen = new Pen(input);
			this.currentZoo.addPen(currentPen);
	},
	createAnimal: function() {
		var animalName = this.getInput('What would you like to call your animal?');
		var animalSpecies = this.getInput('What species is your animal?');
		var animalSize = this.getInput('What size is your animal?');
		var animalGender = this.getInput('What gender is your animal?');
		var currentAnimal = new Animal(animalName, animalSpecies, animalSize, animalGender);
		//
		console.log("This " + currentAnimal.name + " is waiting for a new pen in the holding pen.");
		this.currentZoo.holdingPen.push(currentAnimal);
	},
	getInput: function(saying) {
		return sget(saying).trim().toUpperCase();
	},

	closing: function() {
		console.log("Good-Bye!")
	},	

	opening: function() {
		this.createZoo();
		this.menu();
	},

	menu: function() {
		switch(this.getInput("What would you like to do in your zoo? \n 1 - Create a new Pen \n 2 - Create a new animal \n 3 - Add your animal to a pen \n 4 - Remove animal from pen \n 5 - Delete a pen \n 6 - View all the animals in the zoo \n 7 - View all the animals in a pen \n 8 - Quit the game")) {
			case '1': 
				this.createPen();
				this.menu();
				break;
			case '2':
				this.createAnimal();
				this.menu();
				break;
			case '3':
				this.currentZoo.addAnimalInPen(this.getInput("Please give me name of animal you would like to put in a pen:"), this.getInput("Please give me name of pen you would like to place animal in:"));
				this.menu();
				break;
			case '4':
				this.currentZoo.removeAnimalFromPen(this.getInput("Please give me name of animal you would like to remove from a pen:"), this.getInput("Please give me name of pen would you like to place animal in:"));
				this.menu();
				break;
			case '5':
				this.currentZoo.deletePen(this.getInput("Please give name of Pen you would like to delete:"));
				this.menu();
				break;
			case '6':
				this.currentZoo.viewZoo();
				this.menu();
				break;
			case '7':
				this.currentZoo.viewPen(this.getInput("Please give name of Pen you would like to view:"));
				this.menu();
				break;
			case '8':
				this.closing();
				break;
			default:
				console.log("Enter in a valid entry");
				this.menu();
				break;
		}		
	}
}

zooKeeper.opening();



