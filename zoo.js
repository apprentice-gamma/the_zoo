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
function ZooProgram() {
	enterZoo();	
	var lion = new Animal(var template={name:"Leo", species:"feline",size:"Adult", gender:"male", habitat:"desert"});
	var bear = new Animal(var template={name:"Winnie the Pooh", species:"sloth bear",size:"Adult", gender:"male", habitat:"forest"});
	function enterZoo(){
		console.log("Welcome to John & Nikki's Zoo!");

		var quit = false;
		while (!quit) {
		displayMenu(menuOptions);
		var selection = sget("What would you like to do?\n1.Create an animal\n2.Remove an animal from a pen\n3.Leave Zoo").trim();
		switch(selection){
			case '1': clearScreen();
					  newAnimal();
					  break;

			case '2': clearScreen();
					  removeAnimal();
					  break;
			
			case '3': quit = true;
					  break;
			default: console.log("Invalid input!"); continue;
		}
	}
	
	//----------------------OBJECTS-----------------------------
	function Animal (template){
		this.name = template.name;
		this.species = template.species;
		this.size = template.size;
		this.gender = template.gender;
		this.habitat = template.habitat;
		//this.zoosection = template.zoosection;
	}
	function Pen (){
		this.name = name;
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
	function newAnimal(){
		var template = {};
		var animalProperty =["What would you like to name your animal?", "What your animal's species?", "Is your animal a baby or an adult?", "Is your animal male or female?", "Where is your animal's habitat?"];
		sget 7x
		sget
		ax
		template.name = ax
		var a = new Animal(template)

	}
function clearScreen() { process.stdout.write('\033c');}
}

ZooProgram();

