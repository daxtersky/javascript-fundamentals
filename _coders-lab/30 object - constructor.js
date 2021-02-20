class Animal {
	constructor(type){
		this.type = type;
	}

	breath(){
		console.log("I breathe");
	}
}

class Dog extends Animal {
	constructor(type){
		super(type);
	}

	bark(){
		console.log("Now I am barking")
	}
}
 let dog = new Dog("Mammal");
 dog.breath();
 dog.bark();