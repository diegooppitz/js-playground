class UserInfoLookup {
    constructor(userInfo) {
      this.userInfo = userInfo;
    }
  
    lookup(value) {
      if (value === null || value === undefined) {
        return "Error: Input value is null or undefined";
      }
  
      const isNumber = /^\d+$/.test(value);
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  
      if (isNumber) {
        return this.userInfo.id === parseInt(value, 10) ? this.userInfo : 'Error: ID not found';
      } else if (isEmail) {
        return this.userInfo.email === value ? this.userInfo.name : 'Error: Email not found';
      } else {
        return this.userInfo.name === value ? this.userInfo.email : 'Error: Name not found';
      }
    }
  }
  
  const userInfo = new UserInfoLookup({
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
  });
  
  console.log(userInfo.lookup("1"));
  console.log(userInfo.lookup('alice@example.com'));
  console.log(userInfo.lookup('Alice'));
  console.log(userInfo.lookup('other name'));
  console.log(userInfo.lookup(null));
  