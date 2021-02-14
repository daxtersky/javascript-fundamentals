// * basic array methods

// ! https://dev.to/rebeccauranga/10-array-methods-you-should-know-nn5
// ! https://doesitmutate.xyz/

const week: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// * PUSH - mutation
const weekPush: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
weekPush.push('eightDay!');
// console.log('weekPush:', weekPush);

// * POP - mutation
const weekPop: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
weekPop.pop();
// console.log(weekPop);

// * SHIFT - mutation
const weekShift: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
weekShift.shift();
// console.log(weekShift);

// * UNSHIFT - mutation
const weekUnshift: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
weekUnshift.unshift('Zeroday!');
// console.log(weekUnshift);

// * SPLICE - mutation // add, remove, replace elements
const weekSplice: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// weekSplice.splice(0, 4); // remove
// console.log(weekSplice);
// OR
// weekSplice.splice(4, 1, 'Friday!'); // replace
// console.log(weekSplice);
// OR
// weekSplice.splice(7, 0, 'Eight day!'); // add
// console.log(weekSplice);

// * SLICE - no mutation // remove, shallow copy
const weekSlice: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const shallopCopy = weekSlice.slice();
// console.log(shallopCopy);
const weekSliced = weekSlice.slice(4);
// console.log(weekSliced);

// * FOREACH
const weekForEach: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let foreached = [];
weekForEach.forEach(element => foreached.push(element + '!'));
// console.log(foreached);

// * MAP
const weekMap: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mapped = weekMap.map(element => element + '%');
// console.log(mapped);

// * REDUCE
const numbersReduced: number[] = [1, 2, 3, 4];
// console.log(numbersReduced.reduce((total, amount) => total + amount));

// * FILTER
const numbersFiltered: number[] = [1, 2, 3, 4];
// console.log(numbersFiltered.filter(num => !(num % 2)));

// * FIND
// console.log(week.find(day => day.startsWith('F')));

// * EVERY
// console.log(week.every(day => day.endsWith('y')));

// * SOME
// console.log(week.some(day => day.startsWith('Frida')));

// * FINDINDEX
// console.log(week.findIndex(day => day === 'Friday!'));
// console.log(week.findIndex(day => day === 'Monday'));

// * INCLUDES
// console.log(week.includes('Monday'));

// * INDEXOF
// console.log(week.indexOf('Tuesday'));
// console.log(week.indexOf('Tuesday!'));

// const weekObject: { [key: string]: string } = {
//   day1: 'Monday',
//   day2: 'Tuesday',
//   day3: 'Wednesday',
//   day4: 'Thursday',
//   day5: 'Friday',
//   day6: 'Saturday',
//   day7: 'Sunday',
// };
// * KEYS * VALUES

// * LASTINDEXOF
const weekRepeatedDays: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Friday'];
// console.log(weekRepeatedDays.lastIndexOf('Friday'));

// * REVERSE // mutates!
const weekReverse: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',];
// console.log(weekReverse.reverse());
// console.log(weekReverse);

// * SORT // mutates!
const numbersSort: number[] = [1, 2, 3, 4];
console.log(numbersSort.sort((a,b) => b - a));
