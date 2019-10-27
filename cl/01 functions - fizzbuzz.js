/* Add function with a name "fooBar" with one parameter. Funkction should log all numberbers but:
* in place of even numberbers should log "Foo" string,
* in place of numberbers divided by 5 should log "Bar" string,
* in place of numberbers divided by 3 and 5 shoul log "FOOBAR" string.
* So for x = 15 the result should be:
* 12Foo4BarFoo78FooBar11Foo1314FOOBAR
*/

const fooBar = (number) => {
  let result = '';
  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result += 'FOOBAR';
    } else if (i % 3 === 0) {
      result += 'Foo';
    } else if (i % 5 === 0) {
      result += 'Bar';
    } else {
      result += i;
    }
  }
  console.log(result);
}


fooBar(15);
