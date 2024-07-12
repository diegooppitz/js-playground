const groupBy = (items, groupSize) => {
    let groupedItems = [];
    let currentGroup = [];
    let index = 0;

    while (index < items.length) {
        currentGroup[currentGroup.length] = items[index];
        
        // Add currentGroup to groupedItems if it has reached groupSize
        if (currentGroup.length === groupSize) {
            groupedItems[groupedItems.length] = currentGroup;
            currentGroup = [];
        }

        index++;
    }

    // Add any remaining elements in currentGroup to groupedItems
    if (currentGroup.length) {
        groupedItems[groupedItems.length] = currentGroup;
    }

    return groupedItems;
};

console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupBy(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
