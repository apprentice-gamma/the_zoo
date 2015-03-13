
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
	return sget(message).trim();
}; 

function Animal(species, size, gender){
	this.species = species;
	this.size = size;
	this.gender = gender;
};
// Create a pen
function Pen(){
	this.habitat = habitat;
	this.population = population;
	this.momAndDad = momAndDad;
	this.ocupant = occupant;
};
// create a Zoo object with methods
function Zoo(){
	this.animals = [];
	this.pens = [];

	this.createAnimal = function (species, size, gender){
		console.log("Adding new animal...");
		this.animals.push(new Animal(species, size, gender));
		console.log("Added " + animals[-1]);
	};  //  use this to call funciton later   this.createAnimal(getUserInput("What type of animal is this?"), getUserInput("What size is this animal?"), getUserInput("What gender is this animal?"));
	

	this.removeAnimal = function (){};
	this.addPen = function (){};
	this.removePen = function (){};
	this.addAnimalToPen = function(){};
	this.removeAnimalFromPen = function(){};
	this.displayAnimalsInPen = function(){};
	this.displayAnimalsInZoo = function(){};
};


var DLZoo = new Zoo();
//Initialize the Zoo with a few animals
console.log("Adding some basic animals to your zoo...");
