const tokenize = (input, delimiter) => {
    let resultArray = [];
    let tempString = '';
    
    for (let index = 0; index < input.length; index++) {
      if (input[index] === delimiter) {
        resultArray.push(tempString);
        tempString = '';
      } else {
        tempString += input[index];
      }
    }
    
    // Add the last token
    resultArray.push(tempString);
  
    return resultArray;
  };
  
  console.log(tokenize('Hello,World,How,Are,You', ','));
  console.log(tokenize('Hello World How Are You', ' '));
  console.log(tokenize('Hello-World-How-Are-You', '-'));
  