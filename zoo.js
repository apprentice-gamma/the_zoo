var Animal = function(name, species, size, gender){
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;
}

var Zoo = {
	pens: [],

	addPen: function(pen){

	},

	deletePen: function(pen){

	},

	displayZoo: function(){

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


var lion1 = new Animal('Bob', 'Lion', 'large', 'male');
var lion2 = new Animal('Bill', 'Lion', 'large', 'male');
var lion3 = new Animal('Bill', 'Lion', 'large', 'male');
var monkey = new Animal('Sara', 'Monkey', 'medium', 'female');
var snake = new Animal('Sam', 'Snake', 'small', 'male');

var lionPen = new Pen("Lion's Den",[lion1, lion2, lion3]);



console.log(lionPen);