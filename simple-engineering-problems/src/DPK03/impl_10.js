class UserInfoLookup {
  constructor(users) {
    this.users = users;
  }

  lookup(value) {
    if (value === null || value === undefined) {
      return "Error: Input value is null or undefined";
    }

    const isNumber = /^\d+$/.test(value);
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    for (const user of this.users) {
      if (isNumber) {
        if (user.id === parseInt(value, 10)) {
          return user;
        }
      } else if (isEmail) {
        if (user.email === value) {
          return user.name;
        }
      } else {
        if (user.name === value) {
          return user.email;
        }
      }
    }
    
    return 'Error: User not found';
  }
}

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

const userInfo = new UserInfoLookup(users);

console.log(userInfo.lookup("1"));
console.log(userInfo.lookup('alice@example.com'));
console.log(userInfo.lookup('Alice'));
console.log(userInfo.lookup('Charlie'));

console.log(userInfo.lookup('other name'));
console.log(userInfo.lookup(null));
