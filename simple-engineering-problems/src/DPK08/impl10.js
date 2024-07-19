const customMap = (array, transformFunction) => {
    const transformedArray = [];
    for (let i = 0; i < array.length; i++) {
        transformedArray[transformedArray.length] = transformFunction(array[i]);
    }
    return transformedArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, (number) => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
