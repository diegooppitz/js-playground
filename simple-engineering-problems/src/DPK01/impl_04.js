const reverseString = (inputString) => {

  return inputString.split('').reverse().join('');
};

const result = reverseString("Hello");
console.log(result);
