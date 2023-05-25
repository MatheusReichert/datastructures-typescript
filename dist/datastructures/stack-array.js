"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.items = new Array();
        this.topo = 0;
    }
    push(element) {
        this.items[this.topo] = element;
        this.topo++;
    }
    pop() {
        this.topo--;
        return this.items[this.topo];
    }
    peek() {
        return this.items[this.topo];
    }
    isEmpty() {
        return this.topo === 0;
    }
    clear() {
        this.topo = 0;
        this.items = new Array();
    }
    size() {
        return this.topo;
    }
}
exports.Stack = Stack;
