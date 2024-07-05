const tokenize = (input, delimiter) => {
  let tokens = [];
  let buffer = '';
  let i = 0;

  while (i < input.length) {
    if (input[i] === delimiter) {
      tokens.push(buffer);
      buffer = '';
    } else {
      buffer += input[i];
    }
    i++;
  }

  // Add the last token
  tokens.push(buffer);

  return tokens;
};

console.log(tokenize('Hello,World,How,Are,You', ','));
console.log(tokenize('Hello World How Are You', ' '));
console.log(tokenize('Hello-World-How-Are-You', '-'));
