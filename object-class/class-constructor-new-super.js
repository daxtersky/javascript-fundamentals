// * CLASS

// in Js class is not a class, it's a blueprint of object

class Animal {
  constructor(name, age) { // 'constructor' function intended to be used with new prefix
                           // 'constructor' metoda wywoływana w momencie inicjalizacji obiektu
    this.name = name;
    this.age = age;
  }
  move() {
    console.log(this.name, 'moves ');
  }
}

const duck = new Animal('Duck', 3); // 'new' creates new object from inherited prototype

duck.move();

class Bird extends Animal {
  constructor(name, age, flightLengh) {
    super(name, age)
    this.flightLengh = flightLengh;
  }
  fly() {
    super.move();
    console.log('... and flies', this.flightLengh);
  }
}
const sparrow = new Bird('Sparrow', 3, '15 meters');
sparrow.fly()