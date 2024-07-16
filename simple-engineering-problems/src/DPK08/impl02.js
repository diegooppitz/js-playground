const customMap = (collection, fn) => {
    const result = [];
    for (let i = 0; i < collection.length; i++) {
      const element = collection[i];
      const mappedElement = fn(element);
      result[i] = mappedElement;
    }
    return result;
  };
  
  // Testando a função
  const numbers = [1, 2, 3, 4, 5];
  const doubledNumbers = customMap(numbers, (x) => x * 2);
  console.log(doubledNumbers); // [2, 4, 6, 8, 10]
  