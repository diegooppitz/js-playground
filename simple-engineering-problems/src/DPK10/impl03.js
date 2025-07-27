const reduce = (array, callbackFn, initialValue) => {
    let accumulator = initialValue;
    for (let x = 0; x < array.length; x++) {
        accumulator = callbackFn(accumulator, array[x])
    }

    return accumulator;
}

const valuesArray = [1, 2, 3, 4, 5]
const callbackFn = (total, currentNumber) => total + currentNumber
const initialValue = 0;

const reduceReturn = reduce(valuesArray, callbackFn, initialValue)
console.log(reduceReturn);