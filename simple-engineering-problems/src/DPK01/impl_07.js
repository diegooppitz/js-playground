const isValueValid = (value) => {
  return value && typeof value === 'string';
};

const reverseString = (input) => {
  if (!isValueValid(input)) return 'Invalid input';

  let reversedString = '';

  for (let i = input.length - 1; i >= 0; i--) {
    reversedString += input[i];
  }

  return reversedString;
};

const result = reverseString('Hello');
console.log(result);