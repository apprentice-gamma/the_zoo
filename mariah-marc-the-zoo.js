
var sget = require("sget");


var zooKeeperName = getUserInput("\n\nInitializing the zoo game.  Please let us know your name:");
console.log("\n________________________________________________\n-----------------------------------------------\n   Welcome to your new Zoo, Zookeeper %s!\n-----------------------------------------------\n\nYou currently have no animals in your zoo and have to build it!\n", zooKeeperName);
var DLZoo = new Zoo();
zooMenu();

function getUserInput(message){
	return sget(message).trim().toLowerCase();
}

function Animal(species, animalSize, gender, pen, myId){
	this.species = species;
	this.animalSize = animalSize;
	this.gender = gender;
	this.myId;
	
	this.displayMyself = function(){
		console.log("Animal # " + this.myId +" is a: "+ this.species +". It's gender is "+ this.gender +" and it's size is "+ this.animalSize + ".");
	};
}


function Pen(penName, penNumber, occupants){
	this.penName = penName;
	this.penNumber;
	this.occupants = [];


	this.displayMyOccupants = function(){
		var occupantsOfPen = [];
		console.log("These are the animals in Pen# " + this.penNumber + ":");
		for (i = 0; i < this.occupants.length; i++){
            occupantsOfPen.push(this.occupants[i]);
            console.log(occupantsOfPen[i].species + ", " + occupantsOfPen[i].animalSize + ", " + occupantsOfPen[i].gender);
        }
	}
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
	};  
	
	this.removeAnimal = function (animalID){
		animalID = parseInt(animalID);
                             
		if ((typeof animalID !== undefined) && (animalID <= this.animals.length) && (animalID === this.animals[animalID - 1].myId)){
			this.animals.splice([animalID - 1], 1);
			DLZoo.reassignAnimalID();
		} else {
			console.log("\nPlease make sure to enter a valid number!  Check out all the animals at the zoo again if you need to know the numbers...\n");
		}

	};

	this.reassignAnimalID = function(){
		for (var i = 0; i < this.animals.length; i++){
			this.animals[i].myId = i+1;
		}
		console.log("\nWell, I guess people didn't like that animal anyway.\nPlease standby while the new animals numbers are created...\n");
		DLZoo.displayAnimalsInZoo();

	};
	
	this.addPen = function (penName){
		console.log("\nAdding new pen...\n");
		this.pens.push(new Pen(penName));
		this.pens[this.pens.length - 1].penNumber = this.pens.length;
		console.log("Adding pen number: " + this.pens[this.pens.length - 1].penNumber + " named: " +  this.pens[this.pens.length - 1].penName);
	};

	this.removePen = function (penNumberInput){
		penNumberInput = parseInt(penNumberInput);

		if ((typeof penNumberInput !== undefined) && (penNumberInput <= this.pens.length) && (penNumberInput === this.pens[penNumberInput - 1].penNumber)){
			this.pens.splice([penNumberInput - 1], 1);
			DLZoo.reassignPenNumber();
		} else {
			console.log("\nPlease make sure to enter a valid number!  Check out all the pens at the zoo again if you need to know the numbers...\n");
		}
	};

	this.reassignPenNumber = function(){
		for (var i = 0; i < this.pens.length; i++){
			this.pens[i].penNumber = i+1;
		}
		console.log("\nWell, there goes that pen.\nYou'd better put those animals in a new pen before PETA finds out...\n\nHere are the pens that are left and their new numbers\n");
		for (var i = 0; i < this.pens.length; i++){
			console.log("Pen Number: " + this.pens[i].penNumber + " "+ this.pens[i].penName); 
		}
	};

	this.addAnimalToPen = function(penNumberInput, myIdInput){
		penNumberInput = parseInt(penNumberInput);
		myIdInput = parseInt(myIdInput);

		if ((typeof penNumberInput !== undefined) && (penNumberInput <= this.pens.length) && (penNumberInput === this.pens[penNumberInput - 1].penNumber)){
			if ((typeof myIdInput !== undefined) && (myIdInput <= this.animals.length) && (myIdInput === this.animals[myIdInput - 1].myId)){
				console.log("\nAdding that animal....\n")
				this.pens[penNumberInput - 1].occupants.push(this.animals[myIdInput-1]);
		} else {
				console.log("\nPlease make sure to enter a valid number!  Check out all the animals in the zoo again if you need to know the numbers...\n");
			}
		} else {
			console.log("\nPlease make sure to enter a valid number!  Check out all the pens at the zoo again if you need to know the numbers...\n");
		}		
	};

	this.removeAnimalFromPen = function(penNumberInput, myIdInput){
		penNumberInput = parseInt(penNumberInput);
		myIdInput = parseInt(myIdInput);

		if ((typeof penNumberInput !== undefined) && (penNumberInput <= this.pens.length) && (penNumberInput === this.pens[penNumberInput - 1].penNumber)){
			if ((typeof myIdInput !== undefined) && (myIdInput <= this.animals.length) && (myIdInput === this.animals[myIdInput - 1].myId)){
				console.log("\nRemoving that animal....\n")
				this.pens[penNumberInput - 1].occupants.splice(this.animals[myIdInput-1, 1]);
			} else {
				console.log("\nPlease make sure to enter a valid number!  Check out all the animals in the zoo again if you need to know the numbers...\n");
			}
		} else {
			console.log("\nPlease make sure to enter a valid number!  Check out all the pens at the zoo again if you need to know the numbers...\n");
		}		
	};

	this.displayAnimalsInPen = function(chosenPenNumber){
		chosenPenNumber = parseInt(chosenPenNumber);
		if ((typeof chosenPenNumber !== undefined) && (chosenPenNumber <= this.pens.length) && (chosenPenNumber === this.pens[chosenPenNumber - 1].penNumber)){
			this.pens[chosenPenNumber-1].displayMyOccupants();
		} else {
			console.log("\nPlease make sure to enter a valid number!  Check out all the pens at the zoo again if you need to know the numbers...\n");
		}
	};

	this.displayAnimalsInZoo = function(){
		console.log("\n------------------------------\nThese are the animals in the Zoo:");
		for (var i = 0; i < this.animals.length; i++){
			this.animals[i].displayMyself();
		}
	};
}


function zooMenu(){
	var zooMenuChoice = getUserInput("\nThere are quite a few things you can do at your zoo!\nHere is the complete list of actions you can take: please pick the number of what you would like to do!\n\n1. Add an animal\n2. Remove an animal\n3. Add a pen\n4. Remove a pen\n5. Add an animal to a pen\n6. Remove an animal from a pen\n7. Display all animals in a pen\n8. Display all animals in the zoo\n9. Quit the Zoo Builder");
	switch(zooMenuChoice){
		case "1":
			DLZoo.createAnimal(getUserInput("\nWhat type of animal is this?"), getUserInput("\nWhat size is this animal?"), getUserInput("\nWhat gender is this animal?"));
			zooMenu();
			break;

		case "2":
			DLZoo.removeAnimal(getUserInput("\nPlease enter the number of the animal you are looking for: "));
			zooMenu();
			break;

		case "3":
			DLZoo.addPen(getUserInput("\nWhat do you want to name your pen?"));
			zooMenu();
			break;

		case "4":
			DLZoo.removePen(getUserInput("\nPlease enter the number of the pen you would like remove: "));
			zooMenu();
			break;

		case "5":
			DLZoo.addAnimalToPen(getUserInput("\nPlease enter the number of the pen you would like to add to: "), getUserInput("\nPlease enter the number of the animal you would like to add to the pen: "));
			zooMenu();
			break;

		case "6":
			DLZoo.removeAnimalFromPen(getUserInput("\n Please enter the number of the pen you would like to remove an animal from: "), getUserInput("Please enter the number of the animal you would like to remove: "));
			zooMenu();
			break;

		case "7":
			DLZoo.displayAnimalsInPen(getUserInput("\nPlease enter the number of the pen you would like to look at: "));
			zooMenu();
			break;

		case "8":
			DLZoo.displayAnimalsInZoo();
			zooMenu();
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
	process.exit[0];
}






//  to re-set id numbers of animals to index numbers, you need a for loop that cycles through the entire array and sets the id number to the index number