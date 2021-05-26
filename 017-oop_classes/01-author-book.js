// Create Author and Book classes

class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender.toLowerCase();
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string') {
            throw new Error('Invalid name!');
        }

        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        // RegEx is copied from stackoverflow
        const regEx =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (value.search(regEx)) {
            this._email = value;
        } else {
            throw new Error('Invalid email!');
        }
    }

    get gender() {
        return this._gender.toLowerCase();
    }

    set gender(value) {
        const gen = value.toLowerCase();

        if (gen === 'male' || gen === 'female') {
            this._gender = gen;
        } else {
            throw new Error('Gender can be only male or female!!!');
        }
    }

    toString() {
        if (this.gender === 'male') {
            return `Mr. ${this.name}`;
        }

        if (this.gender === 'female') {
            return `Ms. ${this.name}`;
        }
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string') {
            throw new Error('Invalid title!');
        }

        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string') {
            throw new Error('Invalid author name!');
        }

        this._author = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (typeof value !== 'number') {
            throw new Error('Invalid price value!');
        }

        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        if (typeof value !== 'number' || Number.isNaN(value)) {
            throw new Error('Invalid quantity value!');
        }

        this._quantity = Math.trunc(value);
    }

    getProfit() {
        return this.price * this.quantity;
    }

    toString() {
        return `${this.author} - ${this.title}`;
    }
}

const author1 = new Author('J. K. Rowling', 'abc@gmail.com', 'fEmaLe');
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
// author1.name = 12; // Invalid name!

const book1 = new Book('Harry Potter', author1, 35, 356);
console.log(book1.author);
console.log(book1.price); // 35
console.log(book1.quantity); // 356
console.log(book1.getProfit()); // 12460
book1.quantity = 'abc';
