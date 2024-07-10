const groupBy = (items, groupSize) => {
    let groupedItems = [];
    let currentGroup = [];
    
    items.forEach((item, index) => {
        currentGroup.push(item);
        
        // Check if the current group has reached the desired group size
        const isGroupComplete = (index + 1) % groupSize === 0;
        if (isGroupComplete) {
            groupedItems.push(currentGroup);
            currentGroup = [];
        }
    });

    if (currentGroup.length > 0) {
        groupedItems.push(currentGroup);
    }

    return groupedItems;
};

console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupBy(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
