"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stack_array_1 = require("./datastructures/stack-array");
let st = new stack_array_1.Stack();
st.push(1);
console.log(st.isEmpty());
console.log(st.pop());
