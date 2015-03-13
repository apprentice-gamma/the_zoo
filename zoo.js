var sget = require('sget');

var Animal = function(name, species, size, gender){
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;
}

var Zoo = {
	
	pens: [],

	zooMenuChoices: ["Build a new pen for your animals.","Demolish a pen.","Relocate an animal to a new pen.","Remove an animal from a pen.","Check out zoo inventory.", "Check out a specific pen.","Exit the Zoo for today."],

	addPen: function(){

	},

	deletePen: function(){

	},
	//This method uses two for loops, the first to loop through the pens array, the other to loop through the animals array of
	//each pen
	displayZoo: function(){
		console.log("These are the animals in the Zoo:")
		for (var i = 0; i < this.pens.length; i++){
			for (var j = 0; j < this.pens[i].animals.length; j++){
		console.log(this.pens[i].animals[j].name, "the", this.pens[i].animals[j].species);
			}
		}
		
	},

	handleInput: function(){
		var userInput = sget("Please enter your choice: ").trim();
		if (isNaN(userInput)){
			console.log("Invalid selection, please try again.")
			return this.handleInput();
		} else
			return userInput;
	},
	//Added start menu so the welcome message won't come up while the program is cycling through.
	startMenu: function(){
		console.log("\nWelcome to the Zoo\n===========================\nYou are our new Zookeeper.");
		this.zooMenu();
	},

	zooMenu: function(){
		console.log("\nHere are your choices:\n");
		
		for (i=0;i<zooMenu.length;i++){
			console.log(i+") "+this.zooMenuChoices[i]+"\n");
		}
		
		var input = this.handleInput();
		switch (input) {
			case "1":
				this.addPen();
				this.zooMenu();
				break;
			
			case "2":
				this.deletePen();
				this.zooMenu();
				break;
			
			case "3":
				Pen.addAnimal();
				this.zooMenu();
				break;
			
			case "4":
				Pen.removeAnimal();
				this.zooMenu();
				break;
			
			case "5":
				this.displayZoo();
				this.zooMenu();
				break;
			
			case "6":
				Pen.displayPen();
				this.zooMenu();
				break;

			case "7":
				console.log("\nYou did a good job today. Tomorrow you'll have to work a little harder. \nGoodbye.")
				break;
			
			default:
		}

	},

} 

var Pen = function(type, animals){
	this.type = type;
	this.animals = animals;
	this.addAnimal = function(animal){
		
	};
	this.removeAnimal = function(animal){

	};
	this.displayPen = function(){

	}

}




var lion1 = new Animal('Bob', 'Lion', 'large', 'male');
var lion2 = new Animal('Bill', 'Lion', 'large', 'male');
var lion3 = new Animal('Fred', 'Lion', 'large', 'male');
var monkey = new Animal('Sara', 'Monkey', 'medium', 'female');
var snake = new Animal('Sam', 'Snake', 'small', 'male');


var tempPen = new Pen();
tempPen.type = "Animal Storage";
tempPen.animals = [monkey, snake];
Zoo.pens.push(tempPen);
var lionPen = new Pen("Lion's Den",[lion1, lion2, lion3]);
Zoo.pens.push(lionPen);

// var zoo = new Zoo();

console.log(lionPen);

Zoo.startMenu();