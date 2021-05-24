// Constructor
const CoffeeShop = function (name, menu) {
    this.name = name;
    this.menu = menu;
    this.order = [];
};

// Create function to add orders.
CoffeeShop.prototype.addOrder = function (orderName) {
    const menuNames = this.menu.map((el) => el.name);

    if (menuNames.includes(orderName)) {
        this.order.push(orderName);
        console.log('Order Added!');
    } else {
        console.log('This item is currently unavailable!');
    }
};
