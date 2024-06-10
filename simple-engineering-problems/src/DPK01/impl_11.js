const isValueValid = (value) => {
  return value && typeof value === 'string';
};

const unshift = (array, input) => {
  const arrayCopy = [...[input], ...array];
  return arrayCopy;
}

const reverseString = (input) => {
  if (!isValueValid(input)) return 'Invalid input';

  let characters = [];
  for (let i = 0; i < input.length; i++) {
    characters = unshift(characters, input[i])
  }

  console.log("characters", characters);

  return characters;
};

const result = reverseString('Hello');
console.log(result);
