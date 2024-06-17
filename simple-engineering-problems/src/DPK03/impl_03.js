const isEmail = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] === '@') {
      return true;
    }
  }
  return false;
};


const lookupById = (map, id) => {
    return  map['id'] === id ? map : null;
};

const lookupByString = (map, value) => {
  if (isEmail(value)) {
    return getStringValue({ shouldReturnEmail: false, map });
  }

  return getStringValue({ shouldReturnEmail: true, map });
};

const getStringValue = ({ shouldReturnEmail, map }) =>
    shouldReturnEmail ? map['email'] : map['name'];

const lookup = (map, value) => {
  if (typeof value === 'number') {
    return lookupById(map, value);
  } else if (typeof value === 'string') {
    return lookupByString(map, value);
  }
  return null;
};

const userInfo = {
  id: 1,
  name: 'Alice',
  email: 'alice@example.com',
};

const resultById = lookup(userInfo, 1);
console.log(resultById);

const resultByEmail = lookup(userInfo, 'alice@example.com');
console.log(resultByEmail);

const resultByName = lookup(userInfo, 'Alice');
console.log(resultByName);
