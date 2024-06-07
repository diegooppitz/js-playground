const revert = (list) => {
  let reversedList = '';
  for (let i = 0; i < list.length; i++) {
    reversedList = list[i] + (i < list.length - 1 ? ', ' : '') + reversedList;
  }
  return reversedList;
}

console.log(revert([1, 2, 3, 4, 5]));
