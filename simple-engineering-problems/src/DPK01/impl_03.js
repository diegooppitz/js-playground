const reverseString = (inputString) => {
  const charArray = inputString.split('');
  const reversedArray = charArray.reverse();

  return reversedArray.join('');
};

const result = reverseString("Hello");
console.log(result);
