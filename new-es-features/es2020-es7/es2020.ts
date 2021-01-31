// ! https://www.digitalocean.com/community/tutorials/js-es2020

// * PRIVATE CLASS VARIABLE
class Message {
  #message = 'Hello world!';
  getMessage() {
    return this.#message;
  }
}
const greeting = new Message;
// console.log(greeting.#message); // ! error
// console.log(greeting.getMessage());

// * NULLISH COALESCING OPERATOR returns falsy when null or undefined
interface Information {
  placeOfBirth: string;
  sex: string;
  name: string;
  age: number;
  additionalData: any;
}
const stranger: { knownInformation: Partial<Information> } = {
  knownInformation: {
    placeOfBirth: undefined, // * OR operator || and nullish coalescing ?? behaves the same here
    sex: null, // * OR operator || and nullish coalescing ?? behaves the same here
    name: "",
    age: 0,
  }
}
// console.log(stranger.knownInformation.placeOfBirth || 'Not known!');
// console.log(stranger.knownInformation.sex || 'Not known!');
// console.log(stranger.knownInformation.placeOfBirth ?? 'Not known!');
// console.log(stranger.knownInformation.sex ?? 'Not known!');
// console.log(stranger.knownInformation.name || 'Not known!');
// console.log(stranger.knownInformation.age || 1);
// console.log(stranger.knownInformation.name ?? 'Not known!');
// console.log(stranger.knownInformation.age ?? 1);

// * OPTIONAL CHAINING
// console.log((stranger && stranger.knownInformation && stranger.knownInformation.additionalData) || 'a'); // old way
// console.log(stranger?.knownInformation?.additionalData || 'a');

// * PROMISE ALLSETTLED

// * BIGINT
const maxNumber = Number.MAX_SAFE_INTEGER;
console.log('maxNumber is:', maxNumber);
// console.log('maxNumber + 1 is :', maxNumber + 1); // ! wrong numbers
// console.log('maxNumber + 2 is :', maxNumber + 2); // ! wrong numbers
// console.log('maxNumber + 3 is :', maxNumber + 3); // ! wrong numbers
// console.log('maxNumber + 4 is :', maxNumber + 4); // ! wrong numbers
// console.log('maxNumber + 5 is :', maxNumber + 5); // ! wrong numbers
// const bigNum = 100000000000000000000000000000n; // * not ready yet
