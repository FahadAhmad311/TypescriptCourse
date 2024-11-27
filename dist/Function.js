"use strict";
function add(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }
    else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(add(10, 20));
console.log(add('Fahad, ', 'Ahmad'));
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled);
const applyOperation = (num, operation) => {
    return operation(num);
};
const square = (x) => x * x;
const cube = (x) => x * x * x;
console.log(applyOperation(5, square));
console.log(applyOperation(3, cube));
const addition = (a, b) => {
    return a + b;
};
console.log(addition(3, 5));
function logMessage(message) {
    console.log(`Log: ${message}`);
}
logMessage("Hello Fahad Ahmad,Welcome to TypeScript!");
//# sourceMappingURL=Function.js.map