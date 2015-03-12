function Animal(name, species, size, gender) {
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;
	this.viewAnimal = function() {
		console.log(this.species + " is the species of the animal." + "The animal is a " + this.size + " animal. " + "It is a " + this.gender + ".")
	}
}

function Pen(name) {
	this.animalArray = [];
	this.name = name;
	this.addAnimal = function(animal) {
		this.animalArray.push(animal);
	};
	this.viewPen = function() {
		console.log(this.name + "has these animals: " + this.animalArray.forEach(function(animal){
			animal.viewAnimal();
		}));
	};
	/*this.deleteAnimal = function(animal) {

	}*/

}

function Zoo(name) {
	this.name = name;
	this.penArray = [];
	this.addPen = function(pen) {
		this.penArray.push(pen);
	};
	this.viewZoo = function() {
		console.log(this.penArray.forEach(function(pen){
			pen.viewPen();
		}));
	};
	/*this.deletePen = function(pen) {
	
	}*/
}