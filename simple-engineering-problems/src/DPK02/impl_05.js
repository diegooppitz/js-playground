const reverseArray = (originalArray) => {
  let reversedString = '';

  for (let index = 0; index < originalArray.length; index++) {
    const commaSeparator = index < originalArray.length - 1 ? ', ' : '';
    reversedString = originalArray[index] + commaSeparator + reversedString;
  }

  return reversedString;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
