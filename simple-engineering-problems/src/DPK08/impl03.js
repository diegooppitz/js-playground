const customMap = (collection, fn) => {
    const result = [];
    const length = collection.length;

    for (let i = 0;  i < length; i++) {
      result[i] = fn(collection[i]);
    }
    return result;
  };
  
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = customMap(numbers, (x) => x * 2);
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  