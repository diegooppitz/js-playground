const isArray = (value) => {
    return typeof value === 'object' && 'length' in value;
  };
  
  const isValueValid = (value) => {
    return value && isArray(value);
  };

  const unshift = (array, input) => {
    const arrayCopy = [...[input], ...array];
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
  
  console.log('array', reverseArray([1, 2, 3, 4, 5]));
  