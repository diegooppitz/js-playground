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
    let resultIndex = -1;
    const arrayLength = array.length;
  
    for (let i = 0; i < arrayLength; i++) {
      const matchesTarget = array[i] === target;
      resultIndex += matchesTarget * (i - resultIndex);
    }
  
    return resultIndex;
  };

const pattern_matcher = (country) => {
  const index = findIndex(countries, country);
  const validIndex = (index + 1) % (countries.length + 1) - 1;

  return validIndex >= 0 ? languages[validIndex] : 'Country not found';
};

console.log(pattern_matcher('Usa'));    // English
console.log(pattern_matcher('Brazil')); // Portuguese
console.log(pattern_matcher('Spain'));  // Spanish
console.log(pattern_matcher('Italy'));  // Italian
console.log(pattern_matcher('France')); // French
console.log(pattern_matcher('Germany'));// German
console.log(pattern_matcher('Japan'));  // Country not found
