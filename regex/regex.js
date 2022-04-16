/**
 * REGULAR EXPRESSIONS' BASICS
 * 📚 https://www.youtube.com/watch?v=VrT3TRDDE4M&t=348s
 */

// * With slash / we can create regular expression

let regex1 = /^characters$/i;
console.log('regex1', regex1);

// We also can create regex with contructor notation
// RegExp("here is pattern", "and here is a flag")
// Flags:
// g - global match flag
// m - multiline flag
// i - case insensitive flag

var regex2 = new RegExp("^word$", "i");
console.log('regex2', regex2);

// Testing if regular expresions are the same:
console.log(regex2.test('word'));
console.log(regex2.test('WORD'));
console.log(regex2.test('word '));

// Slash \ (espace symbol)
let charsInDoubleQuotes = "First slash is not visible: \\";
console.log(charsInDoubleQuotes);
let charsInSingleQuotes = 'In single quotation marks it\'s very helpful ';
console.log(charsInSingleQuotes);
let charsInBackticks = `Same goes to \bbackticks`;
console.log(charsInBackticks);

// * special characters in strings
// special characters for the beggining and the end of the string:
// /^string$/
let stringOfSpecialChars = "[({})]\\^$.|?*+"; // string
let regex3 = /\[\(\{\}\)\]\\\^\$.\|\?\*\+/; // regular expression
console.log( "specialChars...", regex3.test(stringOfSpecialChars)  );

// * use cases
//// validation - it is a number: with + sign somewhere, digital numbers, spaces and dash?
let phoneNum = "+48 693 444 007 -++--";

let isValidNum = phoneNum.match(/^[\+\d\s\-]+$/);
console.log(`${phoneNum} is ${isValidNum ? 'valid' : 'invalid'} number`);

// * extraction
let someLongString = "Mikey is trying to learn programming. Mikey finds it interesting, but kinda hard. Mikey Mikey, poor Mikey";
let extractWord = someLongString.match(/Mikey/g);
console.log('How many times Mikey? It\'s:', extractWord.length);

// * replacement
let replaceWord = someLongString.replace(/Mikey/g, "Chłopek");
console.log(replaceWord);
