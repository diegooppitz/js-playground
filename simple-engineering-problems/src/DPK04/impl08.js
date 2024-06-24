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
  return index < countries.length ? index : null;
};

const pattern_matcher = (country) => {
  const countryIndex = getIndex(country);
  return languages[countryIndex];
};

console.log('BR - result', pattern_matcher('Brazil'));   // Output: Portuguese
console.log('US - result', pattern_matcher('Usa'));      // Output: English
console.log('ES - result', pattern_matcher('Spain'));    // Output: Spanish
console.log('DE - result', pattern_matcher('Germany'));  // Output: German
console.log('IT - result', pattern_matcher('Italy'));    // Output: Italian
