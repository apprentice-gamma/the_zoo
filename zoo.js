/*
Authors: Greg & Linda

Create Animals, who are categorized into Pens.
*/

function Animal(species, size, gender) {
	this.species = species;
	this.size = size;
	this.gender = gender;
}

function Pen() {
	this.animals = [];
}
