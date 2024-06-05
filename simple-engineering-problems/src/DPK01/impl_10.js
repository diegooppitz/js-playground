const isValueValid = (value) => {
  return value && typeof value === 'string';
};

const reverseString = (input) => {
  if (!isValueValid(input)) return 'Invalid input';

  const characters = [];
  for (let i = 0; i < input.length; i++) {
    const reverseIndex = input.length - 1 - i;
    characters[reverseIndex] = input[i];
  }

  let reversedString = '';
  for (let char of characters) {
    reversedString += char;
  }

  return reversedString;
};

const result = reverseString('Hello');
console.log(result);
