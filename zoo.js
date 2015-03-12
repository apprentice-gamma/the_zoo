var sget = require('sget');

var Animal = function(name, species, size, gender){
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;
}

var Zoo = {
	
	pens: [],

	addPen: function(){

	},

	deletePen: function(){

	},

	displayZoo: function(){

	},

	handleInput: function(){
		var userInput = sget("Please enter your choice: ").trim();
		if (isNaN(userInput)){
			console.log("Invalid selection, please try again.")
			return this.handleInput();
		} else
			return userInput;
	},

	zooMenu: function(){
		
		console.log("Welcome to the Zoo\n===========================\nYou are our new Zookeeper\nHere are your choices:\n1) Create a new pen for your animals.\n2) Remove a pen from the zoo.\n3) Add an animal to a pen.\n4) Remove an animal from a pen.\n5) Display all zoo animals.\n6) Display animals in a specific pen.");
		this.handleInput();
	
	},

	testing: function(){
		console.log("ttttttttt");
	}

} 

var Pen = function(type, animals){

	this.type = type;

	this.animals = animals;

	this.addAnimal = function(animal){

	}

	this.removeAnimal = function(animal){

	}

	this.displayPen = function(){

	}

}



var tempPen = new Pen("Animal Storage", [monkey, snake]);

var lion1 = new Animal('Bob', 'Lion', 'large', 'male');
var lion2 = new Animal('Bill', 'Lion', 'large', 'male');
var lion3 = new Animal('Fred', 'Lion', 'large', 'male');
var monkey = new Animal('Sara', 'Monkey', 'medium', 'female');
var snake = new Animal('Sam', 'Snake', 'small', 'male');

var lionPen = new Pen("Lion's Den",[lion1, lion2, lion3]);

// var zoo = new Zoo();

console.log(lionPen);

Zoo.zooMenu();
