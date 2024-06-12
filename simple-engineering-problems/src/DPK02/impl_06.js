const isValueValid = (value) => {
  return Array.isArray(value) && value.length > 0;
};

const unshift = (array, input) => {
  const arrayCopy = [input, ...array];
  return arrayCopy;
}

const reverseArray = (input) => {
  if (!isValueValid(input)) return 'Invalid input';

  let reversed = [];
  for (let i = 0; i < input.length; i++) {
    reversed = unshift(reversed, input[i]);
  }

  return reversed;
};

console.log(reverseArray([1, 2, 3, 4, 5]));