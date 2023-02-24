class Stack {
    constructor () {
        this.stack = [];
    }

    add(value) {
        return this.stack.push(value);
    }

    get() {
        return this.stack[this.stack.length - 1];
    }
    
    remove() {
        this.stack = this.stack.slice(0, this.stack.length-1);
        return this.stack;
    }
}