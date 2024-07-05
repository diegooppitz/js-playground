const tokenize = (input, token) => {
    let result = [];
    for (let i = 0, currentString = ""; i < input.length; i++) {
        if (input[i] === token) {
            result.push(currentString);
            currentString = "";
        } else {
            currentString += input[i];
        }
        if (i === input.length - 1) result.push(currentString);
    }
    return result;
}

console.log(tokenize("Hello,World,How,Are,You", ",")); // ["Hello", "World", "How", "Are", "You"]
console.log(tokenize("Hello World How Are You", " ")); // ["Hello", "World", "How", "Are", "You"]
console.log(tokenize("Hello-World-How-Are-You", "-")); // ["Hello", "World", "How", "Are", "You"]
