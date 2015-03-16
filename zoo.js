var sget = require("sget");

function Zoo() {
  this.pens = [];

  this.addPen = function(pen) {
    this.pens.push(pen);
  };

  this.listPens = function() {
    // Starting loop at 1 to skip 'Free Range' pen.
    for (var i = 1; i < this.pens.length; i++) {
      console.log(this.pens[i].name);
    }
  };

  this.findPenByName = function(penName) {
    for (var i = 0, len = this.pens.length; i < len; i++) {
      if (this.pens[i].name === penName) {
        return this.pens[i];
      }
    }
  };

  this.removePen = function(pen) {
    if (pen.name !== "Free Range") {
      this.pens[0].push(pens.animals);  // Moves animals over to Free Range Pen
      this.pens.splice(this.pens.indexOf(pen), 1);
    } else {
      console.log("Nice try. Free Range cannot be removed.");
    }
  };
}

function Pen(name) {
  this.name = name;
  this.animals = [];
}

Pen.prototype.addAnimal = function(animal) {
  this.animals.push(animal);
};

Pen.prototype.listAnimals = function() {
  this.animals.forEach(function(animal) {
    console.log("Name: " + animal.name + "\tSpecies: " + animal.species + "\tSize: " + animal.size + "\tGender: " + animal.gender + "\n");
  });
};

Pen.prototype.findAnimalByName = function(animalName) {
  for (var i = 0, len = this.animals.length; i < len; i++) {
    if (this.animals[i].name === animalName) {
      return this.animals[i];
    }
  }
};

Pen.prototype.removeAnimal = function(animal) {
  for (var i = 0, len = this.animals.length; i < len; i++) {
    if (this.animals[i].name === animal.name) {
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
var freeRange = new Pen("Free Range");
zoo.addPen(freeRange);

// temp test data
freeRange.addAnimal(new Animal("henrietta", "horse", "large", "female"));
freeRange.addAnimal(new Animal("mike", "monkey", "large", "male"));
freeRange.addAnimal(new Animal("bessie", "cow", "medium", "female"));
freeRange.addAnimal(new Animal("jeffrey", "giraffe", "large", "male"));
var dogPound = new Pen("Dog pound");
var monkeyHouse = new Pen("Monkey House");
zoo.addPen(dogPound);
zoo.addPen(monkeyHouse);

var zooKeeping = true;

console.log("Welcome to the zoo!");

while (zooKeeping) {
	console.log("What would you like to do in the zoo?\n"
		+ "1: Add an animal.\n"
		+ "2: Build an animal pen.\n"
		+ "3: Remove a pen.\n"
		+ "4: Add an animal to a pen.\n"
		+ "5: Remove an animal from a pen.\n"
		+ "6: View all the animals in a pen.\n"
		+ "7: View all the animals in the zoo.\n"
		+ "8: Quit");
	var userInput = getInput();

	switch (userInput) {
	  case '1': // Add an animal
	     freeRange.addAnimal(new Animal(getInput("Enter animal's name:"), getInput("Enter species:"), getInput("Enter size:"), getInput("Enter gender:")));
	    break;
	  case '2': // Build an animal pen
	    zoo.addPen(new Pen(getInput("Enter name of pen:")));
	    break;
	  case '3': // Remove a pen
	  	zoo.listPens();
      var pen = zoo.findPenByName(getInput("Type the name of the pen you would like to remove:"));
	  	zoo.removePen(pen);
	  	break;
	  case '4': // Add an animal to a pen
      freeRange.listAnimals();
      var animal = freeRange.findAnimalByName(getInput("Which animal would you like to add to a pen?"));
      zoo.listPens();
      pen = zoo.findPenByName(getInput("Which pen would you like to move " + animal.name + " to?"));
      pen.addAnimal(animal);
      freeRange.removeAnimal(animal);
		  break;
	  case '5': // Remove an animal from a pen.
      zoo.listPens();
      pen = zoo.findPenByName(getInput("Which pen would you like to remove an animal from?"));
      pen.listAnimals();
      var animal = pen.findAnimalByName(getInput("Which animal would you like to remove?"));
      freeRange.addAnimal(animal);
      pen.removeAnimal(animal);
	    break;
	  case '6': // View all the animals in a pen.
      zoo.listPens();
      var pen = zoo.findPenByName(getInput("Select pen to view its animals."));
      pen.listAnimals();
	    break;
	  case '7': // View all the animals in the zoo.
      zoo.pens.forEach(function(pen) {
        pen.listAnimals();
      });
	    break;
	  case '8': // Quit
	  	console.log("Thank you for visiting the zoo.  Please come again.");
	  	zooKeeping = false;
	    break;
	  default:
	  	console.log("Invalid input. Please select from the options below.");
	  	continue;
	}
}
