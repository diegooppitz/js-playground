const isValueValid = (value) => {
  return value && typeof value === 'string';
};

const reverseString = (inputString) => {
  if (!isValueValid(inputString)) return 'Invalid input';

  let reversedString = '';

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
};

const result = reverseString('Hello');
console.log(result);
