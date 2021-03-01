// * PRIVATE & PROTECTED

class Woman {
  public name: string;
  constructor(name) {
    this.name = name;
  }
  protected age: number = Math.floor(Math.random() * 60 + 18);
  private boyfriends: number = Math.floor(Math.random() * 10);
}

const randomGirl = new Woman('Eva');

console.log(randomGirl.name);
console.log(randomGirl.age); // error
console.log(randomGirl.boyfriends); // error
