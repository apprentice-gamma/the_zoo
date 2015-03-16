
//3) Remove Pens
//4) Add an Animal to a Pen
//5) Remove Animals from pens (might be cool as a 2.0 feature to have this feature be add/remove and you type the animal... if it exists then delete it -maybe with a confirm- and if it doesn't exist, create it
//6) Display all the Animals in a Pen
//7) Display all the Animals in the Zoo

//SET UP PROTOTYPE OBJECTS


var sget = require("sget");

function getUserInput(message){
	return sget(message).trim().toLowerCase();
}

function Animal(species, animalSize, gender, pen, myId){
	this.species = species;
	this.animalSize = animalSize;
	this.gender = gender;
	this.myPen = pen;
	this.myId;
	
	// this.findMyId = function(){
	// 	for(var i = 0; i < DLZoo.animals.length; i++);
	// 	if (DL)
	// };

	this.displayMyself = function(){
		console.log(this.species +" : "+ this.animalSize +" : "+ this.gender +" : "+ this.Pen );
	};
}

// Create a pen
function Pen(penName, penNumber, occupants){
	this.penName = penName;
	this.penNumber;
	this.occupants = [];
	// this.displayMyOccupants = function(){
	// 	console.log("These are the animals in " + this.penName + " : " + this.occupants)
	// }
}

// ! ! ! to re-set an animal's id after a deletion, wrtite a function that goes over the animals array and re-sets every animal's id. 

// create a Zoo object with methods
function Zoo(){
	
	this.animals = [];
	
	this.pens = [];
 
	this.createAnimal = function (species, animalSize, gender){
		console.log("Adding new animal...\n");
		this.animals.push(new Animal(species, animalSize, gender));
		this.animals[this.animals.length - 1].myId = this.animals.length;
		console.log("Animal # " + this.animals[this.animals.length-1].myId + " is a " + this.animals[this.animals.length-1].species + ", is a " + this.animals[this.animals.length-1].animalSize + " size, and is a " + this.animals[this.animals.length-1].gender);
		zooMenu();
	};  
	
	this.removeAnimal = function (){};
	
	this.addPen = function (penName){
		console.log("\nAdding new pen...\n");
		this.pens.push(new Pen(penName));
		this.pens[this.pens.length - 1].penNumber = this.pens.length;
		console.log("Adding pen number: " + this.pens[this.pens.length - 1].penNumber + " named: " +  this.pens[this.pens.length - 1].penName);
		zooMenu();
	};

	this.removePen = function (){
		console.log("I do nothing yet!");
		zooMenu();
	};

	this.addAnimalToPen = function(penNumber, myId){
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

	this.displayAnimalsInZoo = function(zooAnimals, zooPens){
		console.log("\n------------------------------\nThese are the animals in the Zoo:")
		console.log(zooPens.occupants); // undefined??
		if (this.pens.occupants.length > 0){
			for (var i = 0; i < this.pens.occupants.length; i++){
				if (this.pens[i].occupants.length > 0){
				console.log("\nPen: " + this.pens[i].penName + " has these animal(s) in it: " + this.pens[i].occupants);
				} else {
					console.log("Make sure to put your animals from their shipping cages into their pens!  Those animals must be really uncomfortable right now...");
				}
			} 
		} else {
			console.log("Make sure to put your animals from their shipping cages into their pens!  Those animals must be really uncomfortable right now...");
		}
		
		zooMenu();
	};
}


function zooMenu(){
	var zooMenuChoice = getUserInput("\nThere are quite a few things you can do at your zoo!\nHere is the complete list of actions you can take: please pick the number of what you would like to do!\n\n1. Add an animal\n2. Remove an animal\n3. Add a pen\n4. Remove a pen\n5. Add an animal to a pen\n6. Remove an animal from a pen\n7. Display all animals in a pen\n8. Display all animals in the zoo\n9. Quit the Zoo Builder");
	switch(zooMenuChoice){
		case "1":
			DLZoo.createAnimal(getUserInput("\nWhat type of animal is this?"), getUserInput("\nWhat size is this animal?"), getUserInput("\nWhat gender is this animal?"));
			break;

		case "2":
			DLZoo.removeAnimal(getUserInput("\nWhich species are you looking for?"));
			break;

		case "3":
			DLZoo.addPen(getUserInput("\nWhat do you want to name your pen?"));
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
			DLZoo.displayAnimalsInPen(getUserInput("\nPlease enter the number of the pen you would like"));
			break;

		case "8":
			DLZoo.displayAnimalsInZoo(DLZoo.animals, DLZoo.pens);
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
	console.log("\n  We hate to see you go, Zookeeper!\n  Please remember to come back and build a zoo again!");
}



var zooKeeperName = getUserInput("\n\nInitializing the zoo game.  Please let us know your name:");
console.log("\n________________________________________________\n-----------------------------------------------\n   Welcome to your new Zoo, Zookeeper %s!\n-----------------------------------------------\n\nYou currently have no animals in your zoo and have to build it!\n", zooKeeperName);
var DLZoo = new Zoo();

zooMenu();

//  to re-set id numbers of animals to index numbers, you need a for loop that cycles through the entire array and sets the id number to the index number