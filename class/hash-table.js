class HashTable {
    constructor (size = 13) {
        this.size = size; 
    }

    _store = [];

    hash(string) {
        let str = string;
        for (let i = 0; i < string.length; i++) {
            str = string.charCodeAt(i) * i+1;
        }
        return str % this.size;
    }

    add(key, value) {
        const index = this.hash(key);

        if (!this._store[index]) {
            this._store[index] = [key, value];
        }

        // TODO: resolve collision

        this._store[index] = [key, value];
    }

    get(key) {
        const index = this.hash(key);
        return this._store[index][1];
    }
}

module.exports = HashTable;