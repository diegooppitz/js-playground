const revert = (list) => {
  let reversedList = '';
  for (let i = list.length - 1; i >= 0; i--) {
    reversedList += list[i] + (i > 0 ? ', ' : '');
  }
  return reversedList;
}

console.log(revert([1, 2, 3, 4, 5]));
