// Zadanie 5 (~ 15min - 20 min)
// Napisz funkcję create2DArray, która przyjmuje dwa argumenty w postaci dwóch liczb całkowitych rows i columns. Zadaniem funkcji
// jest stworzenie i zwrócenie dwuwymiarowej tablicy o podanej liczbie rzędów i kolumn. Każda komórka ma być wypełniona kolejną
// liczbą całkowitą. Pamiętaj o tym, że tablica ta ma zostać zwrócona przez funkcję inaczej zadanie będzie nie zaliczone.
// Hint: Musisz użyć pętli zagnieżdżonych.
//
// create2DArray(4,4) => [ [1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12],  [13, 14, 15, 16] ];

function create2DArray(rows, columns) {
  var arr = new Array(rows);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(columns)
    let num = 0;
    for (let j = 0; j < arr.length; j++) {
      arr[i][j] = j + i + 1 + num;
      console.log(arr[i][j], i, j);
    }    
  };
  console.log(arr);

  // for (var i = 1; i < rows; i++) {
  //   tab[i] = rows[i] + i;

  //       for (var j = 1; j < columns; i++) {
  //           columns[j] = columns[j] + j;
  //       }
  //   return tab[i,j]
  //   }
}

create2DArray(4,4);
