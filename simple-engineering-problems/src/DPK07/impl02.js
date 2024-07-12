const group_by = (list, size) => {
    let result = [];
    let currentGroup = [];
    let currentIndex = 0;

    for (let i = 0; i < list.length; i++) {
        // Add the current element to the current group
        currentGroup.push(list[i]);
        
        // Check if the current group has reached the specified size
        if (currentGroup.length === size) {
            // Add the current group to the result
            result[currentIndex] = currentGroup;
            // Move to the next group
            currentGroup = [];
            currentIndex++;
        }
    }

    // Add the last group if it has any remaining elements
    if (currentGroup.length > 0) result[currentIndex] = currentGroup;

    return result;
};

console.log(group_by([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(group_by(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
console.log(group_by(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 5));
