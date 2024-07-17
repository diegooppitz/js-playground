const customMap = (collection, fn, index = 0) => {
    if (index >= collection.length) return [];
    const result = customMap(collection, fn, index + 1);
    return customUnshift(result, fn(collection[index]));
};

const customUnshift = (array, value) => {
    const newArray = [value];
    for (let i = 0; i < array.length; i++) {
        newArray[i + 1] = array[i];
    }
    return newArray;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, (x) => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
