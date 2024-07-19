const customFilter = (array, predicate) => {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (predicate(element)) {
            result[result.length] = element;
        }
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isEven = (number) => number % 2 === 0;
const evenNumbers = customFilter(numbers, isEven);
console.log(evenNumbers); // [2, 4, 6, 8, 10]
