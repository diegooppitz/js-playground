const tokenize = (input, token) => {
    let result = [];
    let currentString = "";
    let index = 0;

    while (index < input.length) {
        if (input[index] === token) {
            result.push(currentString);
            currentString = "";
        } else {
            currentString += input[index];
        }
        index++;
    }
    // Push the last token
    result.push(currentString);
    return result;
}

console.log(tokenize("Hello,World,How,Are,You", ",")); // ["Hello", "World", "How", "Are", "You"]
console.log(tokenize("Hello World How Are You", " ")); // ["Hello", "World", "How", "Are", "You"]
console.log(tokenize("Hello-World-How-Are-You", "-")); // ["Hello", "World", "How", "Are", "You"]
