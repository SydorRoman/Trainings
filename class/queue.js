class Queue {
    constructor () {
        this.queue = [];
    }

    add(value) {
        return this.stack.push(value);
    }

    remove() {
        this.stack = this.stack.slice(1, this.stack.length-1);
        return this.stack;
    }
}