// Constructor
const CoffeeShop = function (name, menu) {
    this.name = name;
    this.menu = menu;
    this.orders = [];
};

// Create function to add orders.
CoffeeShop.prototype.addOrder = function (orderName) {
    const menuNames = this.menu.map((el) => el.name);

    if (menuNames.includes(orderName)) {
        this.orders.push(orderName);
        console.log('Order Added!');
    } else {
        console.log('This item is currently unavailable!');
    }
};

CoffeeShop.prototype.fulfillOrder = function () {
    if (this.orders.length !== 0) {
        const ready = this.orders.shift();
        console.log(`The ${ready} is ready!`);
    } else {
        console.log('All orders have been fulfilled!');
    }
};

CoffeeShop.prototype.listOrders = function () {
    return this.orders;
};

CoffeeShop.prototype.dueAmount = function () {
    const amount = this.orders.reduce((acc, current) => {
        this.menu.forEach((el) => {
            if (el.name === current) {
                acc += el.price;
            }
        });

        return acc;
    }, 0);

    return amount;
};

const menu = [
    { name: 'Pasta', type: 'food', price: 2500 },
    { name: 'Kebab', type: 'food', price: 800 },
    { name: 'Pizza', type: 'food', price: 2000 },
    { name: 'Mojito', type: 'drink', price: 1000 },
    { name: 'Margarita', type: 'drink', price: 2500 },
];

const seasons = new CoffeeShop('Pekin', menu);

seasons.addOrder('Pizza');
seasons.addOrder('Margarita');
seasons.addOrder('Shawarma');

console.log(seasons.listOrders()); // ["Pizza", "Margarita"]
console.log(seasons.dueAmount()); // 4500

seasons.fulfillOrder();
seasons.fulfillOrder();
seasons.addOrder('Kebab');

seasons.fulfillOrder();

console.log(seasons.listOrders()); // [] - all orders exhausted.
