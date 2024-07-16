const customMap = (collection, fn, index = 0, result = []) => {
    if (index >= collection.length) return result;
    result[index] = fn(collection[index]);
    return customMap(collection, fn, index + 1, result);
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = customMap(numbers, (x) => x * 2);
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  