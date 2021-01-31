// MARCIN ROZWIĄZANIE 1 PĘTLA
marcin1(5);
function marcin1(n) {
    var str = '';
    for (var i=1; i<=10; i++) {
        for (var j=1; j<=5; j++) {
            if ((j<=i && i<=5) || (j<=10-i+1 && i>5)) {
                str += '*';
            } else {
                str += j;
            }
        }
        str += "\n";
    }
    console.log(str);
}
// MARCIN ROZWIĄZANIE 2 PĘTLE
marcin2(5);
function marcin2(n) {
    var str = '';
    for (var i=1; i<=5; i++) {
        for (var j=1; j<=5; j++) {
            if (j>i) {
                str += j;
            } else {
                str += '*';
            }
        }
        str += "\n";
    }

    for (var i=1; i<=5; i++) {
        for (var j=1; j<=5; j++) {
            if (j>6-i) {
                str += j;
            } else {
                str += '*';
            }
        }
        str += "\n";
    }
    console.log(str);
}

