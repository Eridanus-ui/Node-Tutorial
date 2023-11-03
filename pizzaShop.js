const EventEmitter = require("node:events");

class PizzaShop extends EventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
  }

  //Pass the arguments to be used as you would in any other function.
  order(size, topping) {
    this.orderNumber++;

    //Register a listener
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
