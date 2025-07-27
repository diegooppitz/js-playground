function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i]);
    }
    return accumulator;
}

console.log(reduce([1, 2, 3, 4, 5], (acc, x) => acc + x, 0)); // 15