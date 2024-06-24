const languages = [
  'English',
  'Portuguese',
  'Spanish',
  'Italian',
  'German',
  'Not found',
];
const countries = ['Usa', 'Brazil', 'Spain', 'Italy', 'Germany'];

const getIndex = (country) => {
  let index = 0;
  while (index < countries.length && countries[index] !== country) {
    index++;
  }

  return index < countries.length ? index : -1;
};

const pattern_matcher = (country) => {
  let countryIndex = getIndex(country);
  return countryIndex >= 0 ? languages[countryIndex] : 'Not found';
};

console.log('BR - result', pattern_matcher('Brazil')); // Portuguese
console.log('US - result', pattern_matcher('Usa')); // English
console.log('ES - result', pattern_matcher('Spain')); // Spanish
console.log('DE - result', pattern_matcher('Germany')); // German
console.log('IT - result', pattern_matcher('Italy')); // Italian
console.log('Other - result', pattern_matcher('Other')); // Not found
