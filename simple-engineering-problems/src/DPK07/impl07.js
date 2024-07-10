const groupBy = (list, size) => {
    let result = [];
    let tempGroup = [];
    
    for (let i = 0; i < list.length; i++) {
        // Add the current element to the temporary group
        tempGroup[tempGroup.length] = list[i];

        // When the temporary group is full, add it to the result
        if (tempGroup.length === size) {
            result[result.length] = tempGroup;
            tempGroup = []; // Reset the temporary group
        }
    }

    // Add any remaining elements as the last group
    if (tempGroup.length > 0) {
        result[result.length] = tempGroup;
    }

    return result;
};

// Test cases
console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupBy(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
