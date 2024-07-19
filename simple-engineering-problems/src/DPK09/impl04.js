const performMathOperation = (array, operation) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[result.length] = operation(array[i]);
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const double = (number) => number * 2;
const doubledNumbers = performMathOperation(numbers, double);
console.log('Doubled Numbers:', doubledNumbers); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

const isEven = (number) => number % 2 === 0 ? number : null;
const evenNumbers = performMathOperation(numbers, isEven).filter(x => x !== null);
console.log('Even Numbers:', evenNumbers); // [2, 4, 6, 8, 10]

const addOne = (number) => number + 2;
const incrementedNumbers = performMathOperation(numbers, addOne);
console.log('Incremented Numbers:', incrementedNumbers); // [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
