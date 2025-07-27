const reduce = (array, callbackFn, initialValue) => {
    let accumulator = initialValue;
    for (let x = 0; x < array.length; x++) {
        accumulator = callbackFn(accumulator, array[x])
    }

    return accumulator;
}

const reduceReturn = reduce([1, 2, 3, 4, 5], (total, currentNumber) => total + currentNumber, 0)
