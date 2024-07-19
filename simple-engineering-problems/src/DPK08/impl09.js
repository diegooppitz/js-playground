const customMap = (collection, transformFunction) => {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
        result[result.length] = transformFunction(collection[i]);
    }
    return result;
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, (x) => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
