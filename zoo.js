var sget = require('sget');

var Animal = function(name, species, size, gender){
	this.name = name;
	this.species = species;
	this.size = size;
	this.gender = gender;
}

var Zoo = {
	
	pens: [],

	zooMenuChoices: ["Build a new pen for your animals.","Demolish a pen.","Order a new animal.","Relocate an animal.","Check out zoo inventory.", "Check out a specific pen.","Exit the Zoo for today."],

	addPen: function(){
		var newPenType = sget("What would you like to call the new pen? ").trim();
		this.pens.push(new Pen(newPenType, []));
		console.log("Your builders construct a new pen, called "+newPenType);
		this.zooMenu();
	},

	deletePen: function(choice){
		console.log("Are you sure you want to demolish the pen "+this.pens[choice].type+"?\nThis decision cannot be reversed and all animals inside will be crushed!");
		console.log("After the console log.")
		var decision = sget("y/n:").toLowerCase().trim();
		if (decision === "y")
			this.pens.splice(choice, 1);
			else
			console.log("You decide to keep the pen around... for now.");
		this.zooMenu();
	},
	//This method uses two for loops, the first to loop through the pens array, the other to loop through the animals array of
	//each pen
	displayZoo: function(){
		console.log("\n------------------------------\nThese are the animals in the Zoo:")
		for (var i = 0; i < this.pens.length; i++){
			console.log("\nPen: "+this.pens[i].type+"\n");
			for (var j = 0; j < this.pens[i].animals.length; j++){
		console.log(this.pens[i].animals[j].name, "the", this.pens[i].animals[j].species);
			}
		}
		console.log("------------------------------\n");
		
	},

	handleInput: function(upperBound){
		var userInput = sget("Please enter your choice: ").trim();
		if (isNaN(userInput) || userInput<1 || userInput>upperBound){
			console.log("Invalid selection, please try again.")
			return this.handleInput(upperBound);
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
		
		for (i=0;i<this.zooMenuChoices.length;i++){
			console.log((i+1)+") "+this.zooMenuChoices[i]+"\n");
		}
		
		var input = this.handleInput(this.zooMenuChoices.length);
		switch (input) {
			case "1":
				this.addPen();
				this.zooMenu();
				break;
			
			case "2":
				console.log("Which pen would you like to demolish?")
				this.choosePen('remove');
				this.zooMenu();
				break;
			
			case "3":
				console.log("Which pen would you like to add an animal to?")
				this.choosePen('add');
				this.zooMenu();
				break;
			
			case "4":
				console.log("Which pen would you like to remove an animal from?")
				this.choosePen('relocate');
				this.zooMenu();
				break;
			
			case "5":
				this.displayZoo();
				this.zooMenu();
				break;
			
			case "6":
				this.choosePen('show');
				this.zooMenu();
				break;

			case "7":
				console.log("\nYou did a good job today. Tomorrow you'll have to work a little harder. \nGoodbye.")
				process.exit(0);
				break;
			
			default:
				this.zooMenu();
		}

	},

	choosePen: function(action, animal){
		//this will allow the user to select the pen they want to interact with.
		//since Pen needs to have an instance for us to call a method, this should solve
		//errors that were coming up when calling Pen.addAnimal and such...
		//hopefully.
		console.log("Here are your current pens...");
		for (var i = 0; i < this.pens.length; i++){
			console.log((i+1)+") "+this.pens[i].type);
		}
		
		var choice = parseInt(this.handleInput(this.pens.length).trim());
		choice--; //so it matches up with the array's index values.

		switch(action){
			case 'add':
				this.pens[choice].addAnimal();
				break;
			case 'add2':
				this.pens[choice].addAnimal(animal);
				break;
			case 'remove':
				this.deletePen(choice);			
				break;
			case 'relocate':
				this.removeAnimal(choice);
				break;
			case 'show':
				this.pens[choice].displayPen();
				break;
			default:
				this.zooMenu();
		}

	},

	removeAnimal: function(pen){
		
		for(i = 0;i<this.pens[pen].animals.length;i++){
			console.log((i+1)+") "+this.pens[pen].animals[i].name+" the "+this.pens[pen].animals[i].species+".");
		}
		console.log("Choose the animal to be relocated: ");
		var choice = this.handleInput(this.pens[pen].animals.length);
		// converting the number that was entered into the actual index number so it works properly with the 
		// program
		var animalIndex = choice - 1;
		
		console.log("Choose the pen you would like to move "+this.pens[pen].animals[animalIndex].name+" to.");

		this.choosePen('add2', this.pens[pen].animals[animalIndex]);
		this.pens[pen].animals.splice(animalIndex,1);
		console.log ("The animal has been moved.");

	}


} 

var Pen = function(type, animals){
	
	this.type = type;
	this.animals = animals;
	this.addAnimal = function(animal){

		if (animal===undefined){
			var name = sget("What would you like to name your animal?").trim();
			var species = sget("What kind of animal is it?").trim();
			var size = sget("Is the animal large, medium, or small in size?").trim();
			var gender = sget("Is the animal male or female?").trim();
			this.animals.push(new Animal(name, species, size, gender));
		}
		else {
			this.animals.push(animal);
		}

		
	};
	

	this.displayPen = function(){
		console.log("\n------------------------------\nPen: "+this.type+"\n");
		for (var j = 0; j < this.animals.length; j++){
			console.log(this.animals[j].name, "the", this.animals[j].species);
		}
		console.log("------------------------------\n");
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


Zoo.startMenu();