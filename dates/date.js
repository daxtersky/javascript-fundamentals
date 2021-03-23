// * DATES AND DATE FORMATS

// ! https://elijahmanor.com/blog/format-js-dates-and-times

const date = new Date();
// console.log(date);
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleDateString("pl-PL"));
console.log(date.toLocaleDateString("pl-PL", {
  day: 'numeric',
  month: 'long',
  weekday: 'long',
  year: 'numeric',
  era: 'long',
  timeZone: 'Poland'
}));


console.log(date.toLocaleTimeString("pl-PL", {
  timeZone: 'Poland'
  // timeZone: 'America/Los_Angeles'
  // timeZone: 'Japan'
}));
