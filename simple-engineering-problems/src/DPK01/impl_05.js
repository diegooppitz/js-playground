const isValueValid = (value) => {
  return value && typeof value === 'string';
}

const reverseString = (inputString) => {
  if (!isValueValid(inputString)) return "Invalid input"
  return inputString.split('').reverse().join('');
};

const result = reverseString('Hello');
console.log(result);
