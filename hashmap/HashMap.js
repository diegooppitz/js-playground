class HashMap {
    constructor() {
        this.storage = {};
    }

    put(key, value) {
        this.storage[key] = value;
    }

    get(key) {
        return this.storage[key];
    }

    has(key) {
        return this.storage.hasOwnProperty(key);
    }

    delete(key) {
        if (this.has(key)) {
            delete this.storage[key];
            return true;
        }
        return false;
    }

    size() {
        return Object.keys(this.storage).length;
    }

    clear() {
        this.storage = {};
    }
}

module.exports = HashMap;
