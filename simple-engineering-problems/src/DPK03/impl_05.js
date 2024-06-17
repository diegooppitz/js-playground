const isEmail = (value) => value.includes('@');

const lookupById = (map, id) => {
  return map.id === id ? map : null;
};

const lookupByEmail = (map, email) => {
  return map.email === email ? map.name : null;
};

const lookupByName = (map, name) => {
  return map.name === name ? map.email : null;
};

const lookupStrategies = {
  'number': lookupById,
  'string': (map, value) => isEmail(value) ? lookupByEmail(map, value) : lookupByName(map, value)
};

const lookup = (map, value) => {
  const type = typeof value;
  const strategy = lookupStrategies[type];
  return strategy ? strategy(map, value) : "Error: Invalid input value";
};

const userInfo = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

console.log(lookup(userInfo, 1));
console.log(lookup(userInfo, 'alice@example.com'));
console.log(lookup(userInfo, 'Alice'));
console.log(lookup(userInfo, null));
