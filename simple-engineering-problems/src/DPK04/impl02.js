const countries = ['Usa', 'Brazil', 'Spain', 'Italy', 'France', 'Germany'];
const languages = [
  'English',
  'Portuguese',
  'Spanish',
  'Italian',
  'French',
  'German',
];

const findIndex = (array, target) => {
  let index = -1;
  const length = array.length;

  for (let i = 0; i < length; i++) {
    const isMatch = array[i] === target;
    index += isMatch * (i - index);
  }

  return index;
};

const pattern_matcher = (country) => {
  const index = findIndex(countries, country);
  const validIndex = (index + 1) * (index >= 0) - 1;

  return languages[validIndex] || 'Country not found';
};

console.log(pattern_matcher('Usa')); // English
console.log(pattern_matcher('Brazil')); // Portuguese
console.log(pattern_matcher('Spain')); // Spanish
console.log(pattern_matcher('Italy')); // Italian
console.log(pattern_matcher('France')); // French
console.log(pattern_matcher('Germany')); // German
console.log(pattern_matcher('Japan')); // Country not found
