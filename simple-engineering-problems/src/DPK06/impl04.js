const tokenize = (input, token) => {
  let result = [];
  let string = '';
  let index = 0;

  while (index < input.length) {
    if (input[index] === token) {
      result.push(string);
      string = '';
    } else {
      string += input[index];
    }
    index++;
  }

  // Push the last token
  result.push(string);
  return result;
};

console.log(tokenize('Hello,World,How,Are,You', ','));
console.log(tokenize('Hello World How Are You', ' '));
console.log(tokenize('Hello-World-How-Are-You', '-'));
