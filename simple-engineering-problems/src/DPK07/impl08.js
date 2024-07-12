const groupBy = (arr, size) => {
    let result = [];
    let currentGroup = [];
    let index = 0;

    while (index < arr.length) {
        // Add the current element to the current group
        currentGroup[currentGroup.length] = arr[index];
        index = index++;

        // When the current group is full, add it to the grouped array and reset the current group
        if (currentGroup.length === size) {
            result[result.length] = currentGroup;
            currentGroup = []; // Reset the current group
        }
    }

    // Add any remaining elements as the last group
    if (currentGroup.length > 0) {
        result[result.length] = currentGroup;
    }

    return result;
};

console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupBy(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
