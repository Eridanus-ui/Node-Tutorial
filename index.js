const path = require("node:path");
const EventEmitter = require("node:events");
const DrinkMachine = require("./drinkMachine");
const PizzaShop = require("./pizzaShop");
const fs = require("node:fs");

// // *Path Module:
// console.log(__filename);
// console.log(__dirname);

// console.log(path.parse(__filename));

// console.log(path.basename(__filename));

// console.log(path.extname(__filename));

// console.log(path.isAbsolute(__filename));

// // ***********************************************************************************************
// // *CallBack Patterns:
// // Callback => Function passed as an argument to another function.
// function higerOrderFunction(callback) {
//   const name = "Paul";
//   callback(name);
// }

// function callbackFunction(name) {
//   console.log("Hello", name, "!!");
// }

// higerOrderFunction(callbackFunction);

// // ***********************************************************************************************
// //* EventsModule:
// // watch for events and emit
// const emitter = new EventEmitter();

// emitter.on("order-pizza", (size, topping) => {
//   console.log(
//     "Order received! Baking one",
//     size,
//     "pizza with",
//     topping,
//     "topping."
//   );
// });

// emitter.on("order-pizza", (size) => {
//   size === "large"
//     ? console.log("Serving complimentary drink.")
//     : size === "small"
//     ? console.log("You are not eligible for a complimentary drink")
//     : null;
// });

// emitter.emit("order-pizza", "small", "mushroom");

// //*Extending from EventEmitter
// //You MUST create a new instance of a class before you can use it.
// const pizzaShop = new PizzaShop();
// const drinkMachine = new DrinkMachine();

// // Attach the listener
// pizzaShop.on("order", (size, topping) => {
//   console.log(
//     `Order received! Baking a ${size} pizza with ${topping} topping.`
//   );
//   drinkMachine.serveDrink(size);
// });

// pizzaShop.order("large", "mushroom");
// pizzaShop.displayOrderNumber();

// // * Streams and Buffers
// // A stream is a sequence of data that is moved from one point to another over time.
// // If there is data already processed or too little data to process, Node puts the arriving data in a buffer.
// const buffer = new Buffer.from("Kamau");
// console.log(buffer.toJSON());

// //* FS Module
// readFileSync is a synchronous and uses buffer behind the curtains. The second parameter is the decoding format of the file.
// To use asynchronous behavior, use readFile.
const syncFileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(syncFileContents);

fs.readFile("./file.txt", "utf-8", (error, data) => {
  error ? console.log(error) : console.log(data);
});

// //*Streams
