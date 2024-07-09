const group_by = (list, size) => {
    let result = [];
    let tempGroup = [];
    
    for (let i = 0; i < list.length; i++) {
        // Add the current element to the temporary group
        tempGroup.push(list[i]);

        // When the temporary group is full, add it to the result
        if ((i + 1) % size === 0) {
            result.push(tempGroup);
            tempGroup = []; // Reset the temporary group
        }
    }

    // Add any remaining elements as the last group
    if (tempGroup.length > 0) {
        result.push(tempGroup);
    }

    return result;
};


console.log(group_by([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(group_by(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
