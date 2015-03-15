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
	var allAnimals = {};
	var allPens = {};

	initializeZoo()
	enterZoo();	

	function initializeZoo() {
		var template1 = { name:"leo", species:"lion", size:"adult", gender:"male", habitat:"desert" };
		var template2 = { name:"winnie the pooh", species:"bear", size:"adult", gender:"male", habitat:"forest" };
		createNewAnimal(template1);
		createNewAnimal(template2);		
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
	
	//----------------------CONSTRUCTORS-----------------------------
	function Animal(template) {
		this.name = template.name;
		this.species = template.species;
		this.size = template.size;
		this.gender = template.gender;
		this.habitat = template.habitat;
		//this.zoosection = template.zoosection;
	}

	function BabyAnimal(template) {
		Animal.call(this, template);
	}
	
	function Pen(name) {
		this.name = name;
		this.animals = {};
		this.add = function(animal) {
			this.animals[animal.name] = animal;
		}
		this.remove = function(animal) {
			delete this.animals[animal.name];
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
		createNewAnimal(template);
		enterZoo();
	}

	function createNewAnimal(template) {
		if (template.name in allAnimals) {
			console.log("Sorry, the name is already taken. Try again.");
		} else {
			if (template.size === "adult") {
				var animal = new Animal(template);
				allAnimals[animal.name] = animal;
				checkPenNew(animal);
			} else {
				var animal = new BabyAnimal(template);
				allAnimals[animal.name] = animal;
				checkPenNew(animal);
			}
		}
	}

	function checkPenNew(animal) {		
		if (animal.species in allPens) { allPens[animal.species].add(animal); }
		else { 
			var newPen = new Pen(animal.species);
			newPen.add(animal);
			allPens[newPen.name] = newPen;
		}
	}
	
	function removeAnimal() {
		clearScreen();
		var speciesToRemove = sget("Which species of animal would you like to remove?").trim().toLowerCase();
		if (speciesToRemove in allPens) {
			var animalToRemove = sget("Please enter the name of the animal you would like to remove").trim().toLowerCase();
			clearScreen();
			if (animalToRemove in allPens[speciesToRemove].animals) {
				delete allPens[speciesToRemove].animals[animalToRemove];
				delete allAnimals[animalToRemove];
				console.log(allPens[speciesToRemove].animals);
				console.log("YO");
			} else {
				console.log("Sorry that animal is not found.");
				removeAnimal();
			}
		} else { 
			console.log("Sorry that species is not found.");
			removeAnimal();
		}

		checkPenLast(allPens[speciesToRemove]);
		clearScreen();
		enterZoo();
	}

	function checkPenLast(pen) {
		if (pen.animals.length === 0 && pen in allPens) { delete allPens[pen]; }
	}

	function displayPen() {
		clearScreen();
		var whichPen = sget("Which pen would you like to display? Remember that pen names are the animal's species name.").trim().toLowerCase();
		if (whichPen in allPens) {
			console.log("Here are the animals in the " + whichPen + " pen");
			for (var i in allPens[whichPen].animals) {
				var placeholder = allPens[whichPen].animals[i];
				console.log("------------------");
				console.log("Name: " + placeholder.name + "\n Size: "  + placeholder.size + "\n Gender: " + placeholder.gender);	
			}	
		} else {
			console.log("The " + whichPen + " pen doesn't exist in this zoo.");
		}	
		enterZoo();
	}

	function displayAll() {
		clearScreen();
		for (var key in allAnimals) {
			if (allAnimals.hasOwnProperty(key)) { 
				console.log("------------------"); 
				console.log("Name: " + allAnimals[key].name +"\n Species: " + allAnimals[key].species + "\n Size: "  + allAnimals[key].size + "\n Gender: " + allAnimals[key].gender);
			}
		}
		enterZoo();
	}

	function clearScreen() { process.stdout.write('\033c'); }
}

ZooProgram();

