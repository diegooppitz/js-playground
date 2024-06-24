const findIndex = (array, country) => {
  let index = -1;
  const length = array.length;

  for (let i = 0; i < length; i++) {
    index += (array[i] === country) * (i + 1) - (array[i] === country) * index;
  }

  return index;
};

const pattern_matcher = (country) => {
  const countries = ['Usa', 'Brazil', 'Spain', 'Italy', 'France', 'Germany'];
  const languages = [
    'English',
    'Portuguese',
    'Spanish',
    'Italian',
    'French',
    'German',
  ];

  const index = findIndex(countries, country);
  const errorIndex = countries.length;
  const validIndex = (index === -1) * errorIndex + index;

  return languages[validIndex];
};

console.log(pattern_matcher('Usa'));
console.log(pattern_matcher('Brazil'));
console.log(pattern_matcher('Spain'));
