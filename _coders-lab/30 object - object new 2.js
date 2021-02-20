// Za pomocą kontruktora stwórz funkcję `Tree. Niech funkcja ta ma jedną właściwość `type`, która będzie
// przechowywać typ drzewa.
// Następnie stwórz 2-3 instancje (obiekty) na podstawie konstruktora Tree, będące różnymi drzewami.
// Dopisz do konstruktora również metodę `bloom()`, która będzie zwracała tekst "I am blooming". Sprawdź za pomocą
// metody `hasOwnProperty()`, czy metoda ta została stworzona dla każdej instancji osobno? Jeśli tak zoptymalizuj kod
// dodając ją do prototypu funkcji `Tree`.
function Tree(type, bloom) {
  this.type = type;
  this.bloom = bloom;
  this.bloom = function() {
    return 'I am blooming';
  }
}

const drzewo1 = new Tree('lipa');
const drzewo2 = new Tree('akacja');
const drzewo3 = new Tree('kasztan');

console.log(drzewo1.hasOwnProperty('type'));
console.log(`${drzewo1.type} says "${drzewo1.bloom()}"`);
console.log(drzewo2.hasOwnProperty('type'));
console.log(`${drzewo2.type} says "${drzewo2.bloom()}"`);
console.log(drzewo3.hasOwnProperty('type'));
console.log(`${drzewo3.type} says "${drzewo3.bloom()}"`);
