class UserInfoLookup {
    constructor(userInfo) {
      this.userInfo = userInfo;
    }
  
    isEmail = (value) => {
      return value.includes('@');
    }
  
    lookupById = (id) => {
      return this.userInfo.id === id ? this.userInfo.name : 'Error: ID not found';
    }
  
    lookupByEmail = (email) => {
      return this.userInfo.email === email ? this.userInfo.name : 'Error: Email not found';
    }
  
    lookupByName = (name) => {
      return this.userInfo.name === name ? this.userInfo.email : 'Error: Name not found';
    }
  
    lookupStrategies = (value) => {
      const strategies = {
        number: this.lookupById,
        string: (value) =>
          this.isEmail(value) ? this.lookupByEmail(value) : this.lookupByName(value),
      };
  
      return strategies[typeof value];
    }
  
    lookup = (value) => {
      if (!value) return "Error: Input value is null or undefined";
      
  
      const strategy = this.lookupStrategies(value);
      return strategy ? strategy(value) : 'Error: Invalid input type';
    }
  }
  
  const userInfo = new UserInfoLookup({
    id: 1,
    name: 'Alice',
    email: 'alice@example.com',
  });
  
  console.log(userInfo.lookup(1));
  console.log(userInfo.lookup('alice@example.com'));
  console.log(userInfo.lookup('Alice'));
  console.log(userInfo.lookup('other name'));
  console.log(userInfo.lookup(null));
  