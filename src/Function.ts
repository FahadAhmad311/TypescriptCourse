//Function Overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    }
    throw new Error('Invalid arguments');
}
console.log(add(10, 20));  
console.log(add('Fahad, ', 'Ahmad'));  

//Higher Order Function
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

const applyOperation = (num: number, operation: (x: number) => number): number => {
    return operation(num);
};

const square = (x: number) => x * x;
const cube = (x: number) => x * x * x;

console.log(applyOperation(5, square)); 
console.log(applyOperation(3, cube));   

//Anonymous Function
const addition = (a: number, b: number): number => {
    return a + b;
};

console.log(addition(3, 5)); 

//Function having void
function logMessage(message: string): void {
    console.log(`Log: ${message}`);
}

logMessage("Hello Fahad Ahmad,Welcome to TypeScript!"); // Output: Log: Hello, TypeScript!

