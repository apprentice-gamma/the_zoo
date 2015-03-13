/*Welcome to the Zoo

You should have a Zoo and the Zoo should have a collection of Pens for Animals to go in. 

Create an interactive program which allows the user (the Zookeeper!) to:

1.) Create new Animals (animals should have a .zoosection," "size," and "gender")
1.) Set up new Pens
2.) Remove Pens
3.) Add an Animal to a Pen
4.) Remove Animals from pens
5.) Display all the Animals in a Pen
6.) Display all the Animals in the Zoo

Bonus (choose any or all)
a. Your program should also allow the Zookeeper to add BabyAnimals to Pens. BabyAnimal should utilize Animal as a Prototype.
b. Your program should not allow the zookeeper to add more than (4) total Animals or (10) total BabyAnimals to a Pen.
c. Your program should not allow the zookeeper to add a BabyAnimal to a Pen unless you already have a male Animal and a female Animal living in the Pen.
d. Your program should include Habitats, which should describe what a given Animal's habitat is like (desert, forest, hot, cold, etc.).*/
var sget = require("sget");

function ZooProgram() {
	var allAnimals = [];
	var allPens = [];

	initializeZoo()
	enterZoo();	

	function initializeZoo() {
		var template = { name:"leo", species:"lion", size:"adult", gender:"male", habitat:"desert" };
		var lion = new Animal(template);
		template = { name:"winnie the pooh", species:"bear", size:"adult", gender:"male", habitat:"forest" };
		var bear = new Animal(template);
		allAnimals.push(lion);
		allAnimals.push(bear);
		var lionPen = new Pen(lion.species);
		var bearPen = new Pen(bear.species);
		lionPen.animals.push(lion);
		bearPen.animals.push(bear);
		allPens.push(lionPen);
		allPens.push(bearPen);
	}

	function enterZoo() {
		console.log("------------------");
		console.log("Welcome to John & Nikki's Zoo!");	

		var quit = false;
		while (!quit) {
			var selection = sget("What would you like to do?\n1.Create an animal\n2.Remove an animal from a pen\n3.Display all animals in a specific pen\n4.Display all animals in the zoo\n5.Leave Zoo").trim();
			console.log("------------------");
			switch(selection){
				case '1': 
							clearScreen();
						  newAnimal();
						  break;

				case '2': 
							clearScreen();
						  removeAnimal();
						  break;
				
				case '3': 
							clearScreen();
						  displayPen();
						  break;

				case '4': 
							clearScreen();
						  displayAll();
						  break;

				case '5': 
							quit = true;
						  break;

				default: 
						console.log("Invalid input!"); 
						continue;
			}
			process.exit();
		}
	}
	
	//----------------------OBJECTS-----------------------------
	function Animal(template) {
		this.name = template.name;
		this.species = template.species;
		this.size = template.size;
		this.gender = template.gender;
		this.habitat = template.habitat;
		//this.zoosection = template.zoosection;
	}
	
	function Pen(name) {
		this.penName = name;
		this.animals=[];
		this.add = function(animal) {
			this.animals.push(animal);
		}
		this.remove = function(animal) {
			var animalLocation = animals.indexOf(animal);
			this.animals.splice(animalLocation, 1);
		}
	}
	//-----------------------------------------------------------
	function newAnimal() {
		var template = {};
		var animalProperty =["What would you like to name your animal?", "What your animal's species (i.e. be specific, lion vs. feline, wolf vs. canine)?", "Is your animal a baby or an adult?", "Is your animal male or female?", "Where is your animal's habitat?"];
		var keys = ["name", "species", "size", "gender", "habitat"];
		for (var i=0; i<animalProperty.length; i++) {
			clearScreen();
			var answer = sget(animalProperty[i]).trim().toLowerCase();
			template[keys[i]] = answer;
		}
		var animal = new Animal(template);
		allAnimals.push(animal);
		checkPen(animal);
		enterZoo();
		//check for duplicates. if errors, restart newAnimal
	}
	function checkPenForNew(animal){
		for (var i=0; i<allPens.length; i++) {
			if (allPens[i].penName === animal.species && allPens[i].animals.length > 0) {
				allPens[i].add(animal);
			} else {
				var createdPen = new Pen(animal.species);
				createdPen.add(animal);
			}
		}
	}

	function checkPenForLast(pen) {
		if (pen.animals.length === 0) { 
			for (var i=0; i<allPens.length; i++) {
				if (allPens[i].name === pen.name) {
					allPens.splice(i, 1);
				}
			}
		}
	}
	
	function removeAnimal() {
		clearScreen();
		var speciesToRemove = sget("Which species of animal would you like to remove?").trim().toLowerCase();
		var found = false;
		for (var i=0; i<allPens.length; i++){ 
			if (allPens[i].penName === speciesToRemove) {
				var penPlaceholder = allPens[i];
				found = true;
			} 
		}
		if (found === false){
			console.log("A pen with that name was not found.");
			removeAnimal();
		}
		found = false;
		clearScreen();
		var animalToRemove = sget("Please enter the name of the animal you would like to remove").trim().toLowerCase();
		for (var j=0; j<penPlaceholder.animals.length; j++){ 
			if (penPlaceholder.animals[j].name === animalToRemove) {
				removeFromAllAnimals(penPlaceholder.animals[j]);
				penPlaceholder.animals.splice(j, 1);
				found = true;
			} 
		}
		if (found === false){
			console.log("An animal with that name was not found.");
			removeAnimal();
		}
		checkPenForLast(penPlaceholder);
		clearScreen();
		enterZoo();
	}

	function removeFromAllAnimals(animal) {
		for (var i=0; i<allAnimals.length; i++) {
			if (allAnimals[i] === animal) { allAnimals.splice(i, 1); }
		}
	}

	function displayPen() {
		clearScreen();
		console.log("Here is a list of your pens...");
		for (var i=0; i<allPens.length; i++){
			console.log("The " + allPens[i].penName + " Pen");
		}
		console.log("------------------");
		var whichPen = sget("Which pen would you like to display?").trim().toLowerCase();

		for (var j=0; j<allPens.length; j++) {
			if (allPens[j].penName === whichPen) { var selectedPen = allPens[j]; }
		}

		console.log("Here are the animals in the " + selectedPen.penName + " Pen");
		for (var g=0; g<selectedPen.animals.length; g++){
			console.log("------------------");
			console.log("Name: " + selectedPen.animals[g].name + "\n Size: "  + selectedPen.animals[g].size + "\n Gender: " + selectedPen.animals[g].gender);
		}
		enterZoo();
	}

	function displayAll() {
		clearScreen();
		for (var i=0; i<allAnimals.length; i++){
			console.log("------------------");
			console.log("Name: " + allAnimals[i].name +"\n Species: " + allAnimals[i].species + "\n Size: "  + allAnimals[i].size + "\n Gender: " + allAnimals[i].gender);
		}
		enterZoo();
	}

	function clearScreen() { process.stdout.write('\033c'); }
}

ZooProgram();

