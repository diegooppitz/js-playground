const tokenize = (input, token) => {
    let result = [];
    let currentString = "";
    for (let i = 0; i < input.length; i++) {
        if (input[i] === token) {
            result.push(currentString);
            currentString = "";
        } else currentString += input[i];
        
    }
    // Push the last token
    result.push(currentString);
    return result;
}

console.log(tokenize("Hello,World,How,Are,You", ",")); // ["Hello", "World", "How", "Are", "You"]
console.log(tokenize("Hello World How Are You", " ")); // ["Hello", "World", "How", "Are", "You"]
console.log(tokenize("Hello-World-How-Are-You", "-")); // ["Hello", "World", "How", "Are", "You"]
