const customMap = (collection, transformFunction, index = 0) => {
    if (index >= collection.length) return [];
    const mappedValue = transformFunction(collection[index]);
    const remainingMapped = customMap(collection, transformFunction, index + 1);
    return customConcat([mappedValue], remainingMapped);
};

const customConcat = (baseArray, arrayToConcat) => {
    return customConcatHelper(baseArray, arrayToConcat, 0);
};

const customConcatHelper = (baseArray, arrayToConcat, index) => {
    if (index >= arrayToConcat.length) return baseArray;
    baseArray[baseArray.length] = arrayToConcat[index];
    return customConcatHelper(baseArray, arrayToConcat, index + 1);
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, (x) => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
