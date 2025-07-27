const reduce = (array, callback, initialValue) => {
    const recurse = (index, accumulator) => 
        index >= array.length
            ? accumulator
            : recurse(index + 1, callback(accumulator, array[index]));
    
    return recurse(0, initialValue);
};

console.log(reduce([1, 2, 3, 4, 5], (total, current) => total + current, 0)); // 15
