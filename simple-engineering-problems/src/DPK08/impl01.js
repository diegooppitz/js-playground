const customMap = (collection, fn) => {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      result[i] = fn(collection[i]);
    }
    return result;
  };
  
  const result = customMap([1, 2, 3, 4, 5], (x) => x * 2);
  console.log(result); // [2, 4, 6, 8, 10]
  