//// Stwórz obiekt book. Dopisz do niego następujące właściwości i wypisz je w konsoli: title, author, numberOfPages
function Person(name, age) {
  this.imie = name;
  this.wiek = age;
  this.opis = opis(this); // robimy to zaoszczędzając miejsce i używając ostatnią funckję describe
}
const lamusek = new Person ('Miko', 31); // instancja
function opis(lol) {
  console.log(`${lol.imie} ma ${lol.wiek} lat.`);
}
////
function Person2(name, age) {
  this.imie = name;
  this.wiek = age;
  this.sayHello = function() {
    console.log(`${this.imie} ma ${this.wiek} lat.`);
  };
}
const mikus = new Person2('Miki', 35);
mikus.sayHello(this);
