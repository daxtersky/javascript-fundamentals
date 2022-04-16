/**
 * * DATE AND DATE FORMATS 
 */

const now = new Date();
console.log('new Date():', now);
console.log('getDate():', now.getDate());
console.log('getDay():', now.getDay());
console.log('getTime():', now.getTime()); // NOW IN EPOCH

const start = new Date(0);
console.log('Date(0):', start);

const pickTime = new Date(2000, 3, 16, 18, 30);
console.log('Date(2000, 3, 16, 18, 30)', pickTime);

// 📚 https://elijahmanor.com/blog/format-js-dates-and-times

const date = new Date();
// console.log(date);
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleDateString("pl-PL"));
console.log('toLocaleDateString:', date.toLocaleDateString("pl-PL", {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
  era: 'long',
  timeZone: 'Poland'
}));

console.log('toLocaleTimeString:', date.toLocaleTimeString("pl-PL", {
  timeZone: 'Poland'
  // timeZone: 'America/Los_Angeles'
  // timeZone: 'Japan'
}));
