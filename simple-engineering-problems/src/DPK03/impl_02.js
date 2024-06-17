const includes = value => {
    for (let i = 0; i < value.length; i++) {
        if (value[i] === '@') {
            return true;
        }
    }
    return false;
};

const lookup = (map, value) => {
    if (typeof value === 'number' && value === map['id']) {
        return map;
    } else if (typeof value === 'string') {
        if (includes(value)) {
            return map['name'];
        } else {
            return map['email'];
        }
    } else {
        return null;
    }
};

const userInfo = {
    id: 1,
    name: "Alice",
    email: "alice@example.com"
};

const resultById = lookup(userInfo, 1);
console.log(resultById);

const resultByEmail = lookup(userInfo, 'alice@example.com');
console.log(resultByEmail);

const resultByName = lookup(userInfo, 'Alice');
console.log(resultByName);
