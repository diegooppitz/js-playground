const isArray = (value) => {
    return typeof value === 'object' && 'length' in value;
};

const isValueValid = (value) => {
    return value && isArray(value);
};

const reverseArray = (input) => {
    if (!isValueValid(input)) return 'Invalid input';

    let reversed = new Array(input.length);
    for (let i = 0; i < input.length; i++) {
        const reverseIndex = input.length - 1 - i;
        reversed[reverseIndex] = input[i]; 
    }

    return reversed;
};

console.log('array', reverseArray([1, 2, 3, 4, 5]));