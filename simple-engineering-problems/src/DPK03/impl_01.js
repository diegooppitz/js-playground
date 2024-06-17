const lookup = (map, value) => {
    if (typeof value === 'number' && value === map['id']) {
        return map;
    } else if (typeof value === 'string') {
        if (value.includes('@')) {
            return map['name'];
        } else {
            return map['email'];
        }
    } else {
        return null;
    }
}

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
