/*
Authors: Greg & Linda

Create Animals, who are categorized into Pens.
*/

var sget = require("sget");

function Zoo() {
  this.freeRangeAnimals = [];
  this.pens = [];
  this.addAnimal = function(animal) {
    this.freeRangeAnimals.push(animal);
  };
  this.addPen = function(pen) {
    this.pens.push(pen);
    // console.log("test in Zoo: " + pen.name);
    // console.log("test in Zoo this.pens: " + this.pens);
  };
  this.listPens = function() {
  	for (var i = 0; i < this.pens.length; i++) {
  		console.log(this.pens[i].name);
  	}
  };
  this.removePen = function(penName) {
  	for (var i = 0; i < this.pens.length; i++) {
  		if (this.pens[i].name === penName) {
   			this.pens.splice(i, 1);
  		}
  	}
  };
}

function Pen(name) {
  this.name = name;
  this.animals = [];
}

function Animal(species, size, gender) {
  this.species = species;
  this.size = size;
  this.gender = gender;
}

function getInput(userPrompt) {
  return sget(userPrompt).trim();
}

var zoo = new Zoo();
var zooKeeping = true;

// Temp test data
zoo.addPen(new Pen("doghouse"));
zoo.addPen(new Pen("monkey house"));
zoo.addPen(new Pen("zebra house"));


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
	  case '1':
	    zoo.addAnimal(new Animal(getInput("Enter species:"), getInput("Enter size:"), getInput("Enter gender:")));
	    break;

	  case '2':
	    zoo.addPen(new Pen(getInput("Enter name of pen:")));
	    break;

	  case '3':
	  	zoo.listPens();
	  	zoo.removePen(getInput("Type the name of the pen you would like to remove:"));
	  	break;

	  case '4':
	    break;

	  case '5':
	    break;

	  case '6':
	    break;

	  case '7':
	    break;

	  case '8':
	  	console.log("Thank you for visiting the zoo.  Please come again.")
	  	zooKeeping = false;
	    break;
	  default:
	  	console.log("Invalid input. Please select from the options below.");
	  	continue;
	}

}
