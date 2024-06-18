const isEmail = (value) => value.includes('@');

const lookupById = (map, id) => {
  return map.id === id ? map : "Error: ID not found";
};

const lookupByEmail = (map, email) => {
  return map.email === email ? map.name : "Error: Email not found";
};

const lookupByName = (map, name) => {
  return map.name === name ? map.email : "Error: Name not found";
};

const getLookupStrategy = (value) => {
  if (typeof value === 'number') {
    return lookupById;
  } else if (typeof value === 'string') {
    return isEmail(value) ? lookupByEmail : lookupByName;
  }
  return () => "Error: Invalid input value";
};

const lookup = (map, value) => {
  const strategy = getLookupStrategy(value);
  return strategy(map, value);
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
console.log(lookup(userInfo, undefined));
