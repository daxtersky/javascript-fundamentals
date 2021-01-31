class Animal {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
class Cat extends Animal {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
let cat = new Cat("Filemon", 4);

console.log(cat);
console.log(cat.name);
console.log(cat.getName());