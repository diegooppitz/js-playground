const customMap = (collection, transformFunction, index = 0, result = []) => {
    if (index >= collection.length) return result;
    result[result.length] = transformFunction(collection[index]);
    return customMap(collection, transformFunction, index + 1, result);
};

const customConcat = (baseArray, arrayToConcat, index = 0) => {
    if (index >= arrayToConcat.length) return baseArray;
    baseArray[baseArray.length] = arrayToConcat[index];
    return customConcat(baseArray, arrayToConcat, index + 1);
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, (x) => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]