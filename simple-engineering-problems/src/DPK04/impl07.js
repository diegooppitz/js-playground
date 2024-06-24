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
  const countriesLength = countries.length;
  let countryIndex = 0;

  for (let index = 0; index <= countriesLength && countries[index] !== country; index++) {
    countryIndex = index + 1;
  }

  return countryIndex;
};

const pattern_matcher = (country) => {
    const countryIndex = getIndex(country);
    return languages[countryIndex]
};

console.log('BR - result', pattern_matcher('Brazil'));   // Output: Portuguese
console.log('US - result', pattern_matcher('Usa'));      // Output: English
console.log('ES - result', pattern_matcher('Spain'));    // Output: Spanish
