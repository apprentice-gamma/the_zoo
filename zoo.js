/*
Authors: Greg & Linda

Create Animals, who are categorized into Pens.
*/

var sget = require("sget");

function Zoo() {
	this.freeRangeAnimals = [];
	this.pens = [];
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




console.log("Welcome to the zoo!");

console.log("What would you like to do in the zoo?\n"
	+ "1: Add an animal.\n"
	+ "2: Build an animal pen.\n"
	+ "3: Remove a pen.\n"
	+ "4: Add an animal to a pen.\n"
	+ "5: Remove an animal from a pen.\n"
	+ "6: View all the animals in a pen.\n"
	+ "7: View all the animals in the zoo.\n"
	+ "8: Quit");
var userInput =  getInput();


