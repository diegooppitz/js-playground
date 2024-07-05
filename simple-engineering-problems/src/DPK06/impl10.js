const tokenize = (input, delimiter) => {
    const tokensObj = {};
    let buffer = '';
    let tokenCount = 0;
  
    for (let i = 0; i < input.length; i++) {
      if (input[i] === delimiter) {
        tokensObj[tokenCount++] = buffer;
        buffer = '';
      } else {
        buffer += input[i];
      }
    }
  
    // Add the last token
    tokensObj[tokenCount] = buffer;
  
    // Convert object to array
    const tokensArray = [];
    for (let key in tokensObj) {
      tokensArray[tokensArray.length] = tokensObj[key];
    }
  
    return tokensArray;
  };
  
  console.log(tokenize('Hello,World,How,Are,You', ','));
  console.log(tokenize('Hello World How Are You', ' '));
  console.log(tokenize('Hello-World-How-Are-You', '-'));
  