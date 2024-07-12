const group_by = (list, size) => {
    let result = [];
    let group = [];
    
    for (let i = 0; i < list.length; i++) {
        group.push(list[i]);
        if (group.length === size || i === list.length - 1) {
            result.push(group);
            group = [];
        }
    }
    
    return result;
}

console.log(group_by([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(group_by(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3));
console.log(group_by(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 5));
