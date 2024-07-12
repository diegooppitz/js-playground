const groupBy = (array, groupSize) => {
  let result = [];
  let arrayIndex = 0;

  const arrLength = array.length;

  while (arrayIndex < arrLength) {
    let currentGroup = [];
    
    for (let groupIndex = 0; groupIndex < groupSize && arrayIndex < arrLength; groupIndex++) {
      currentGroup[currentGroup.length] = array[arrayIndex];
      arrayIndex++;
    }
    result[result.length] = currentGroup;
  }

  return result;
};

console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
console.log(groupBy(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 3));

console.log(groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(groupBy(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'], 5));
