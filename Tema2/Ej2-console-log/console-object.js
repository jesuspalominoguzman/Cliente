console.log("%cWelcome to the application!", "color: blue; font-size: 20px;");
console.info("%cThis is an informational message.", "color: green; font-size: 16px;");
console.warn("%cThis is a warning, be cautious.", "color: orange; font-size: 16px;");
console.error("%cError! Something went wrong.", "color: red; font-size: 16px;");

const users = [
    { name: "John", age: 30, city: "New York" },
    { name: "Jane", age: 25, city: "San Francisco" },
    { name: "Bob", age: 40, city: "Chicago" }
];

console.table(users);