/*
Na Twojej stronie internetowej masz stworzony formularz, który pozwala dodawać
różne rodzaje produktów do listy.

W pliku zadanie06.js masz stworzoną klasę Food - jako klasę abstrakcyjną. W konstruktorze klasa ustawia nazwę
produktu (name), ilość białka (protein), ilość węglowodanów (carbs)  oraz ilość tłuszczu (fat) w produkcie, (W gramach).


Napisz kod dzięki, któremu po wypełnieniu formularza i kliknięciu przycisku "Dodaj", zostaną wykonane następujące czynności:
 * nowy produkt zostanie dodany do listy `ul` o id `products`,
 * zostanie stworzony nowy obiekt na podstawie odpowiedniej klasy dziedziczącej po Food. To znaczy, jeżeli produkt będzie zawierał powyżej 250 kcal zostanie stworzony jako obiekt klasy FastFood. Jeżeli poniżej 250 kcal zostanie stworzony jako obiekt klasy FatFreeFood.
 * dodaj stworzony obiekt do tablicy `foods` i wyświetl ją w konsoli.

Kalorie możesz obliczyć na podstawie następującego wzoru:
`JavaScript
1 g białka	dostarcza	4 kcal
1 g tłuszczu	dostarcza	9 kcal
1 g węglowodanów	dostarcza	4 kcal
`

Przykład.
Po dodaniu produktu hot_dog i wypełnieniu jego danych odżywczych w formularzu, zostanie stworzony obiekt na bazie klasy Fast_Food np. w następujący sposób: `new FastFood('Hot Dog', 10, 4.2, 26)`, co po przeliczeniu:
10* 4 + 4.2 * 4 + 9 * 26 daje 280.8 kcal.

Na podstawie formularza stwórz kilka obiektów jak poniżej:

`JavaScript
new FastFood('Fries', 3.4, 41, 15)
new FastFood('Donut', 4.9, 51, 25)
new FatFreeFood('Greek Yogurt', 10, 3.6, 0.4)
`
Napisz metodę o nazwie print (w odpowiedniej klasie), która będzie wypisywała informację o produkcie.
` */

let foods = [];

class Food {
  constructor(name, protein, carbs, fat) {
    this.name = name;
    this.protein = protein;
    this.carbs = carbs;
    this.fat = fat;
  }
}

class FastFood extends Food {
  print() {
    console.log("Jestem FastFood");
    console.log(this.name, this.protein, this.carbs, this.fat);
  }
}
class FatFreeFood extends Food {
  print() {
    console.log("Jestem FatFreeFood");
    console.log(this.name, this.protein, this.carbs, this.fat);
  }
}


$('#add').on('click', function (e) {
  e.preventDefault();

  //pola
  const $name = $('#name');
  const $protein = $('#proteins');
  const $carbs = $('#carbs');
  const $fat = $('#fat');

  //ich wartosci
  const name = parseInt($name.val(), 10);
  const protein = parseInt($protein.val(), 10);
  const carbs = parseInt($carbs.val(), 10);
  const fat = parseInt($fat.val(), 10);
  const kCal = (protein * 4) + (fat * 9) + (carbs * 4);

  const $product = $(`
        <li>
            <div>Nazwa: ${name}</div>
            <div>Białka: ${protein}</div>
            <div>Węglowowany: ${carbs}</div>
            <div>Tłuszcz: ${fat}</div>
        </li>
    `);

  $('#products').append($product);

  let ob = null;

  if (kCal >= 250) {
    ob = new FastFood(name, protein, carbs, fat);
  } else {
    ob = new FatFreeFood(name, protein, carbs, fat);
  }

  ob.print();

  foods.push(ob);

})
