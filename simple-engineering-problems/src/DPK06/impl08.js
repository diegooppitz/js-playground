const tokenize = (input, delimiter) => {
    let tokens = [];
    let tempString = '';
    let index = 0;
    
    do {
      if (input[index] === delimiter) {
        tokens.push(tempString);
        tempString = '';
      } else {
        tempString += input[index];
      }
      index++;
    } while (index < input.length);
    
    // Add the last token
    tokens.push(tempString);
    
    return tokens;
  };
  
  console.log(tokenize('Hello,World,How,Are,You', ','));
  console.log(tokenize('Hello World How Are You', ' '));
  console.log(tokenize('Hello-World-How-Are-You', '-'));
  