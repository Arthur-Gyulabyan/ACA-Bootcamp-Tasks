// CoffeeShop() with classes

class CoffeeShop {
    constructor(name, menu) {
        this.name = name;
        this.menu = menu;
        this.orders = [];
    }

    addOrder(orderName) {
        const menuNames = this.menu.map((el) => el.name);

        if (menuNames.includes(orderName)) {
            this.orders.push(orderName);
            console.log('Order Added!');
        } else {
            console.log('This item is currently unavailable!');
        }
    }

    fulfillOrder() {
        if (this.orders.length !== 0) {
            const ready = this.orders.shift();
            console.log(`The ${ready} is ready!`);
        } else {
            console.log('All orders have been fulfilled!');
        }
    }

    listOrders() {
        return this.orders;
    }

    dueAmount() {
        const amount = this.orders.reduce((acc, current) => {
            this.menu.forEach((el) => {
                if (el.name === current) {
                    acc += el.price;
                }
            });

            return acc;
        }, 0);

        return amount;
    }

    cheapestItem() {
        let cheapest = this.menu[0];

        this.menu.forEach((el) => (cheapest = cheapest.price > el.price ? el : cheapest));

        return cheapest.name;
    }

    drinksOnly() {
        return this.menu.filter((el) => el.type === 'drink').map((el) => el.name);
    }

    foodOnly() {
        return this.menu.filter((el) => el.type === 'food').map((el) => el.name);
    }
}

const menu = [
    { name: 'Pasta', type: 'food', price: 2500 },
    { name: 'Kebab', type: 'food', price: 800 },
    { name: 'Pizza', type: 'food', price: 2000 },
    { name: 'Mojito', type: 'drink', price: 1000 },
    { name: 'Margarita', type: 'drink', price: 2500 },
];

const seasons = new CoffeeShop('Seasons', menu);

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
console.log(seasons.dueAmount());

console.log(seasons.cheapestItem()); // "Kebab"

console.log(seasons.drinksOnly()); // ["Mojito", "Margarita"]
console.log(seasons.foodOnly()); // ["Pasta", "Kebab", "Pizza"]
