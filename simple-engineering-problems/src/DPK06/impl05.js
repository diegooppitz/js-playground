const tokenize = (input, token) => {
    let result = [];
    let currentString = '';
    let index = 0;
  
    while (index < input.length) {
      if (input[index] !== token) {
        currentString += input[index];
      } else {
        result.push(currentString);
        currentString = '';
      }
      index++;
    }
  
    // Push the last token
    if (currentString !== '') {
      result.push(currentString);
    }
  
    return result;
  };
  
  console.log(tokenize('Hello,World,How,Are,You', ','));
  console.log(tokenize('Hello World How Are You', ' '));
  console.log(tokenize('Hello-World-How-Are-You', '-'));
  