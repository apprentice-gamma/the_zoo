var sget = require("sget");

function Zoo() {
  this.animals = [];
  this.pens = [];

  this.addAnimal = function(animal) {
    this.animals.push(animal);
  };

  this.addPen = function(pen) {
    this.pens.push(pen);
  };

  this.listPens = function() {
    for (var i = 0; i < this.pens.length; i++) {
      console.log(this.pens[i].name);
    }
  };

  this.addAnimalToPen = function(animalName, penName) {
    this.findPenByName(penName).animals.push(this.findAnimalByName(animalName));
  };

  this.findPenByName = function(penName) {
    for (var i = 0, len = this.pens.length; i < len; i++) {
      if (this.pens[i].name === penName) {
        return this.pens[i];
      }
    }
  };

  this.findAnimalByName = function(animalName) {
    for (var i = 0, len = this.animals.length; i < len; i++) {
      if (this.animals[i].name === animalName) {
        return this.animals[i];
      }
    }
  };

  this.showAllAnimals = function() {
    this.animals.forEach(function(animal) {
      console.log("Name: " + animal.name + "\tSpecies: " + animal.species + "\tSize: " + animal.size + "\tGender: " + animal.gender + "\n");
    });
  };
}

function Pen(name) {
  this.name = name;
  this.animals = [];
}

Pen.prototype.displayAnimals = function() {
  this.animals.forEach(function(animal) {
    console.log("Name: " + animal.name + "\tSpecies: " + animal.species + "\tSize: " + animal.size + "\tGender: " + animal.gender + "\n");
  });
};

Pen.prototype.removeAnimal = function(animalName) {
  for (var i = 0, len = this.animals.length; i < len; i++) {
    if (this.animals[i].name === animalName) {
      this.animals.splice(i, 1);
    }
  }
};

function Animal(name, species, size, gender) {
  this.name = name;
  this.species = species;
  this.size = size;
  this.gender = gender;
}

function getInput(userPrompt) {
  return sget(userPrompt).trim();
}

var zoo = new Zoo();
var dog = new Animal("spuds", "dog", "small", "male");
zoo.addAnimal(new Animal("mike", "horse", "large", "female"));
zoo.addAnimal(new Animal("morris", "cat", "large", "male"));
zoo.addAnimal(new Animal("bessie", "cow", "medium", "male"));
zoo.addAnimal(new Animal("jeffrey", "giraffe", "large", "female"));
zoo.addAnimal(dog);
var dogPound = new Pen("Dog pound");
var butterflyHouse = new Pen("Butterfly House");
zoo.addPen(dogPound);
zoo.addPen(butterflyHouse);
// console.log(zoo.pens);
// zoo.listPens();
zoo.showAllAnimals();

console.log("Dogpound pre-addition: " + dogPound.animals.length);
console.log("Zoo animals array pre " + zoo.animals.length);
zoo.addAnimalToPen("spuds", "Dog pound");
console.log("Dogpound post-addition: " + dogPound.animals.length);
console.log("Zoo animals array post " + zoo.animals.length);

console.log("NEW");
zoo.findPenByName("Dog pound").displayAnimals();
// var bessie = zoo.findAnimalByName("bessie");
// console.log(bessie.name);
// console.log(bessie.gender);

// var pound = zoo.findPenByName("Dog pound");
// console.log(pound.name);
// console.log(pound.animals);

// var zooKeeping = true;

// console.log("Welcome to the zoo!");

// while (zooKeeping) {
// 	console.log("What would you like to do in the zoo?\n"
// 		+ "1: Add an animal.\n"
// 		+ "2: Build an animal pen.\n"
// 		+ "3: Remove a pen.\n"
// 		+ "4: Add an animal to a pen.\n"
// 		+ "5: Remove an animal from a pen.\n"
// 		+ "6: View all the animals in a pen.\n"
// 		+ "7: View all the animals in the zoo.\n"
// 		+ "8: Quit");
// 	var userInput = getInput();

// 	switch (userInput) {
// 	  case '1':
// 	    zoo.addAnimal(new Animal(getInput("Enter species:"), getInput("Enter size:"), getInput("Enter gender:")));
// 	    break;

// 	  case '2':
// 	    zoo.addPen(new Pen(getInput("Enter name of pen:")));
// 	    break;

// 	  case '3':
// 	  	zoo.listPens();
// 	  	zoo.removePen(getInput("Type the name of the pen you would like to remove:"));
// 	  	break;

// 	  case '4':
// 		    break;

// 	  case '5':
// 	    break;

// 	  case '6':
// 	    break;

// 	  case '7':
// 	    break;

// 	  case '8':
// 	  	console.log("Thank you for visiting the zoo.  Please come again.")
// 	  	zooKeeping = false;
// 	    break;
// 	  default:
// 	  	console.log("Invalid input. Please select from the options below.");
// 	  	continue;
// 	}

// }