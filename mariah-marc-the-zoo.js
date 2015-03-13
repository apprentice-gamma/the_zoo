
//1) Create a new Animal
//2) Set up new Pens
//3) Remove Pens
//4) Add an Animal to a Pen
//5) Remove Animals from pens (might be cool as a 2.0 feature to have this feature be add/remove and you type the animal... if it exists then delete it -maybe with a confirm- and if it doesn't exist, create it
//6) Display all the Animals in a Pen
//7) Display all the Animals in the Zoo

//SET UP PROTOTYPE OBJECTS
//Create new Animals (animals should have a "species," "size," and "gender")

var sget = require("sget");

function getUserInput(message){
	return sget(message).trim().toLowerCase();
}

function Animal(species, size, gender){
	this.species = species;
	this.size = size;
	this.gender = gender;
}
// Create a pen
function Pen(){
	this.habitat = habitat;
	this.population = population;
	this.momAndDad = momAndDad;
	this.ocupant = occupant;
}
// create a Zoo object with methods
function Zoo(){
	this.animals = [];
	this.pens = [];
	this.createAnimal = function (species, size, gender){
		console.log("\nAdding new animal...\n");
		this.animals.push(new Animal(species, size, gender));
		console.log(this.animals[this.animals.length-1].species);
		zooMenu();
	};  
	

	this.removeAnimal = function (){};
	
	this.addPen = function (){
		console.log("I do nothing yet!");
		zooMenu();
	};

	this.removePen = function (){
		console.log("I do nothing yet!");
		zooMenu();
	};

	this.addAnimalToPen = function(){
		console.log("I do nothing yet!");
		zooMenu();
	};

	this.removeAnimalFromPen = function(){
		console.log("I do nothing yet!");
		zooMenu();
	};

	this.displayAnimalsInPen = function(){
		console.log("I do nothing yet!");
		zooMenu();
	};

	this.displayAnimalsInZoo = function(){
		console.log("I do nothing yet!");
		zooMenu();
	};
};


function zooMenu(){
	var zooMenuChoice = getUserInput("\nThere are quite a few things you can do at your zoo!\n\nYou currently have no animals in your zoo and have to build it!\n\nHere is the complete list of actions you can take: please pick the number of what you would like to do!\n\n1. Add an animal\n2. Remove an animal\n3. Add a pen\n4. Remove a pen\n5. Add an animal to a pen\n6. Remove an animal from a pen\n7. Display all animals in a pen\n8. Display all animals in the zoo\n9. Quit the Zoo Builder");
	switch(zooMenuChoice){
		case "1":
			DLZoo.createAnimal(getUserInput("\nWhat type of animal is this?"), getUserInput("\nWhat size is this animal?"), getUserInput("\nWhat gender is this animal?"));
			break;

		case "2":
			DLZoo.removeAnimal();
			break;

		case "3":
			DLZoo.addPen();
			break;

		case "4":
			DLZoo.removePen();
			break;

		case "5":
			DLZoo.addAnimalToPen();
			break;

		case "6":
			DLZoo.removeAnimalFromPen();
			break;

		case "7":
			DLZoo.displayAnimalsInPen();
			break;

		case "8":
			DLZoo.displayAnimalsInZoo();
			break;

		case "9":
			quit();
			break;

		case "":
			console.log("\nHey %s -please make sure to actually enter a number!\n", zooKeeperName);
			zooMenu();
			break;

		default:
			console.log("\nInvalid input, please try again!\n");
			zooMenu();
			break;
	}

}


function quit(){
	console.log("\n  We hate to see you go, Zookeeper!\n  Please remember to come back and build a zoo again!", zooKeeperName);
}



var zooKeeperName = getUserInput("\n\nInitializing the zoo game.  Please let us know your name:");
console.log("\n________________________________________________\n-----------------------------------------------\n   Welcome to your new Zoo, Zookeeper %s!\n-----------------------------------------------\n", zooKeeperName);
var DLZoo = new Zoo();
//Initialize the Zoo with a few animals
console.log("Adding some basic animals to your zoo...");
DLZoo.animals.push(new Animal("Panda", "Medium", "Female"));
zooMenu();