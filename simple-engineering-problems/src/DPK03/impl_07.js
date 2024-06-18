class UserInfoLookup {
    constructor(userInfo) {
      this.userInfo = userInfo;
    }
  
    isEmail = (value) => {
      return value.includes('@');
    }
  
    lookupById = (id) => {
      return this.userInfo.id === id ? this.userInfo : "Error: ID not found";
    }
  
    lookupByEmail = (email) => {
      return this.userInfo.email === email ? this.userInfo.name : "Error: Email not found";
    }
  
    lookupByName = (name) => {
      return this.userInfo.name === name ? this.userInfo.email : "Error: Name not found";
    }
  
    getLookupStrategy = (value) => {
      if (typeof value === 'number') {
        return this.lookupById;
      } else if (typeof value === 'string') {
        return this.isEmail(value) ? this.lookupByEmail : this.lookupByName;
      }
      return () => "Error: Invalid input value";
    }
  
    lookup = (value) => {
      const strategy = this.getLookupStrategy(value);
      return strategy(value);
    }
  }
  
  
  const userInfo = new UserInfoLookup({
    id: 1,
    name: 'Alice',
    email: 'alice@example.com'
  });
  
  console.log(userInfo.lookup(1));
  console.log(userInfo.lookup('alice@example.com'));
  console.log(userInfo.lookup('Alice'));
  console.log(userInfo.lookup('other name'));
  console.log(userInfo.lookup(null));

  