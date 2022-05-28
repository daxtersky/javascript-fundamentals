// * reverse string linked list (lista jednokierunkowa)

// ! https://blog.soltysiak.it/pl/2016/08/10-najpopularniejszych-algorytmicznych-pytan-rekrutacyjnych/

const word1 = 'kajak ';
const word2 = 'zakaz';
const word3 = 'niepalindrom';
const word4 = 'palindrom';

const isPalindrom = (word) => {
  const wordArray = [...word.trim()];
  const wordLength = wordArray.length;
  if (wordLength % 2 === 1) {
    for (let i = 0; i < wordLength; i++)
      if (wordArray[i] === wordArray[wordLength - i - 1]) {
        return console.log(`'${word}' is a palindrom!`);
      } else {
        return console.log(`'${word}' is not a palindrom,`);
      }
  } else {
    return console.log(`'${word}' is not a palindrom (not equal numbers of letters)`);
  }
};

isPalindrom(word1);
isPalindrom(word2);
isPalindrom(word3);
isPalindrom(word4);
isPalindrom('amkaakma');
