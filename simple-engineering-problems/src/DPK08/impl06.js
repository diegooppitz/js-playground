const customMap = (collection, fn, index = 0) => {
    if (index >= collection.length) return [];
    const mappedValue = fn(collection[index]);
    return customConcat([mappedValue], customMap(collection, fn, index + 1));
};

const customConcat = (array1, array2, index = 0) => {
    if (index >= array2.length) return array1;
    array1[array1.length] = array2[index];
    return customConcat(array1, array2, index + 1);
};

const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = customMap(numbers, (x) => x * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]
