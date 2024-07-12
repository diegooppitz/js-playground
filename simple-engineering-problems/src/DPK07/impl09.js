const groupBy = (items, size) => {
  let result = [];
  let index = 0;

  while (index < items.length) {
    let currentGroup = [];

    for (let i = 0; i < size && index < items.length; i++) {
      currentGroup[currentGroup.length] = items[index];
      index++;
    }
    result[result.length] = currentGroup;
  }

  return result;
};

console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupBy(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 3));

console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(groupBy(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 5));
