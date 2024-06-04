const isValueValid = (value) => {
    return value && typeof value === 'string';
  };
  
  const reverseString = (input) => {
    if (!isValueValid(input)) return 'Invalid input';
  
    const characters = [];
    for (let i = input.length - 1; i >= 0; i--) {
      characters.push(input[i]);
    }
  
    const reversedString = characters.join('');
    return reversedString;
  };
  
  const result = reverseString('Hello');
  console.log(result);
  