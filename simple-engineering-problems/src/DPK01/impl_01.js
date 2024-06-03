const revertString = (input) => {
    const splittedValue = input.split('');
    const reversedValue = splittedValue.reverse();

    return reversedValue.join('');
  }
  
  const revertedString = revertString("Hello");
  console.log(revertedString);