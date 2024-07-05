const tokenize = (input, delimiter) => {
    const tokens = {};
    let buffer = '';
    let tokenCount = 0;
    
    for (let i = 0; i <= input.length; i++) {
      if (input[i] === delimiter || i === input.length) {
        tokens[tokenCount] = buffer;
        buffer = '';
        tokenCount++;
      } else {
        buffer += input[i];
      }
    }
  
    return tokens;
  };
  
  console.log(tokenize('Hello,World,How,Are,You', ','));
  console.log(tokenize('Hello World How Are You', ' '));
  console.log(tokenize('Hello-World-How-Are-You', '-'));
  