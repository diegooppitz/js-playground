const customFilter = (array, conditionFunction) => {
    const filteredArray = [];
    for (let i = 0; i < array.length; i++) {
        if (conditionFunction(array[i])) {
            filteredArray[filteredArray.length] = array[i];
        }
    }
    return filteredArray;
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = customFilter(numbers, (number) => number % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]
