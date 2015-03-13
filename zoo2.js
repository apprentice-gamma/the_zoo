var readline = require('readline');
var prompt = readline.createInterface({input: process.stdin, output: process.stdout});

function Animal(name, species, size, gender) {
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;
	this.viewAnimal = function() {
		return console.log(this.species + " is the species of the animal." + "The animal is a " + this.size + " animal. " + "It is a " + this.gender + ".");
	}
}

// var panda = new Animal("bamboo bond", "panda", "large", "male");
// panda.viewAnimal();

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
	}

}

// var pandaPen = new Pen("Panda Pen");
// pandaPen.addAnimal("1234");
// pandaPen.addAnimal(panda);
// pandaPen.viewPen();
// pandaPen.deleteAnimal("bamboo bond");
// pandaPen.viewPen();

function Zoo(name) {
	this.name = name;
	this.penArray = [];
	this.addPen = function(pen) {
		this.penArray.push(pen);
	};
	this.viewZoo = function() {
		console.log("In " + this.name + " is these Animals:");
		this.penArray.forEach(function(pen){
			pen.viewPen();
		});
	};
	this.findPen = function(penName) {
		var foundPen = false;
		this.penArray.forEach(function(pen) {
			if (pen.name === penName) {
				return foundPen = pen;
			}
		});
		return foundPen;
	}
	this.deletePen = function(penName) {
		var penIndex = this.penArray.indexOf(this.findPen(penName));
		if (penIndex === -1) {
			console.log("Please enter valid pen.");
		} else {
			this.penArray.splice(penIndex, 1);
		}
	
	}
}

// var happyZoo = new Zoo("Happy's Zoo");
// happyZoo.addPen(pandaPen);
// happyZoo.viewZoo();
// happyZoo.deletePen("Panda Pen");
// happyZoo.viewZoo();
var zooKeeper = {
	createZoo: function() { 
		prompt.question('What would you like to call your zoo? ', function(input){
			this[currentZoo] = new Zoo(input);
			//put in a function to create pen
		});
	}
	createPen: function() {
		prompt.question('What would you like to call your pen?', function(input) {
			var currentPen = new Pen(input);
			this.currentZoo.push(currentPen);
			//
		});
	}
	
	//NEED TO MAKE HOLDING PEN FOR ANIMALS that defaults the animals to go there	
}

