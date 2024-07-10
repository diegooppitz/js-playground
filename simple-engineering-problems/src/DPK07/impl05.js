const groupBy = (items, groupSize) => {
    let groupedItems = [];
    let currentGroup = [];
    let index = 0;

    while (index < items.length) {
        currentGroup[currentGroup.length] = items[index];
        
        // Check if the current group has reached the desired group size
        const isGroupComplete = (currentGroup.length % groupSize) === 0;
        if (isGroupComplete) {
            groupedItems[groupedItems.length] = currentGroup;
            currentGroup = [];
        }

        index = index + 1;
    }

    // Add any remaining elements as the last group
    if (currentGroup.length > 0) {
        groupedItems[groupedItems.length] = currentGroup;
    }

    return groupedItems;
};

// Test cases
console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupBy(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
