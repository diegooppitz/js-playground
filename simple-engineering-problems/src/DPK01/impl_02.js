const valueIsNotValid = (value) => {
  return !value || typeof value != 'string';
}

const revertString = (stringValue) => {
  if (valueIsNotValid(stringValue)) return "Invalid input value";
  const splittedValue = stringValue.split('');
  const reversedValue = splittedValue.reverse();

  return reversedValue.join('');
};

console.log('solution return:', revertString('Hello'));
console.log('solution with invalid input:', revertString(10));
