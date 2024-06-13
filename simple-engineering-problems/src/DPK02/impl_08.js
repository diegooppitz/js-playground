const isArray = (value) => {
  return typeof value === 'object' && 'length' in value;
};

const isValueValid = (value) => {
  return value && isArray(value);
};

const unshift = (array, input) => {
  const arrayCopy = [input, ...array];
  return arrayCopy;
};

const reverseArray = (input) => {
  if (!isValueValid(input)) return 'Invalid input';

  let reversed = [];
  for (let i = 0; i < input.length; i++) {
    reversed = unshift(reversed, input[i]);
  }

  return reversed;
};

const obj = { 'one': 1, 'two': 2, 'three': 3 };
console.log('array', reverseArray([1, 2, 3, 4, 5]));
console.log('null', reverseArray(null));
console.log('object', reverseArray(obj));
console.log('string', reverseArray('1, 2, 3, 4, 5'));
console.log('number', reverseArray(10));
