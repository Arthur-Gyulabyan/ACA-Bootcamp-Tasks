// Describe a model of library.

class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;

        Book.idCounter++;
    }

    static idCounter = 0;

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    isTheSameBook(book) {
        return this.author === book.author && this.title === book.title;
    }

    toString() {
        return `"${this.title}" -${this.author}`;
    }
}

const book1 = new Book("You don't know JS", 'Kyle Simpson');
console.log(book1.title);

class LibraryBookBase extends Book {
    constructor(title, author) {
        super(title, author);
        this._bookId = Book.idCounter;
    }

    get bookId() {
        return this._bookId;
    }

    toString() {
        return `"${this.title}" - ${this.author}. ID - ${this.bookId}`;
    }
}

const baseBook1 = new LibraryBookBase('Harry Potter', 'J. K. Rowling');
console.log(baseBook1.title);
console.log(baseBook1.author);

class LibraryBook extends Book {
    constructor(title, author, quantity) {
        super(title, author);
        this._bookId = Book.idCounter;
        this._quantity = quantity;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
            throw new Error('Invalid quantity value!');
        }

        this._quantity = Math.trunc(value);
    }

    increaseQuantityBy(amount) {
        this.quantity += amount;
        return this.quantity;
    }

    decreaseQuantityBy(amount) {
        this.quantity -= amount;
        return this.quantity;
    }

    toString() {
        return `"${this.title}" - ${this.author}. Quantity - ${this.quantity}`;
    }
}

const libraryBook1 = new LibraryBook('The Old Man and the Sea', 'Ernest Hemingway', 12);
console.log(libraryBook1.increaseQuantityBy(12));
console.log(libraryBook1.decreaseQuantityBy(24));

class ReaderBook extends Book {
    constructor(title, author, expirationDate) {
        super(title, author);
        this._bookId = Book.idCounter;
        this._expirationDate = expirationDate;
        this._isReturned = false;
    }

    get expirationDate() {
        return this._expirationDate;
    }

    set expirationDate(value) {
        if (typeof value !== 'string') {
            throw new Error('Invalid expiration date!');
        }

        this._expirationDate = value;
    }

    get isReturned() {
        return this._isReturned;
    }

    set isReturned(value) {
        if (typeof value !== 'boolean') {
            throw new Error('Value can be only true or false!');
        }

        this._isReturned = value;
    }

    toString() {
        return `"${this.title}" - ${this.author}. Expiration date - ${this.expirationDate}`;
    }
}

const readerBook1 = new LibraryBook('The Old Man and the Sea', 'Ernest Hemingway', '12-04');
console.log(readerBook1);
console.log(readerBook1.author);
