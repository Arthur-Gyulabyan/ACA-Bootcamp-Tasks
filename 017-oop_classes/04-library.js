// Describe a model of library.

class Book {
    static idCounter = 0;

    constructor(title, author) {
        this._title = title;
        this._author = author;

        Book.idCounter++;
    }

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
        return `"${this.title}" - ${this.author}`;
    }
}


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

class Reader {
    static idCounter = 0;

    constructor(firstName, lastName, books = []) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._books = books;
        this._readerId = Reader.idCounter;

        Reader.idCounter++;
    }


    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        if (typeof value !== 'string' || value.length < 2) {
            throw new Error('Invalid first name!');
        }

        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        if (typeof value !== 'string' || value.length < 3) {
            throw new Error('Invalid last name!');
        }

        this._firstName = value;
    }

    get books() {
        return this._books;
    }

    set books(value) {
        if (!Array.isArray(value)) {
            throw new Error('Data about books is not represented!');
        }

        this._books = value;
    }

    borrowBook(book, library) {
        if (library.doHaveBook(book) && book instanceof ReaderBook) {
            this.books.push(book);
        }
    }

    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Library {
    constructor(books, readers) {
        this._books = books;
        this._readers = readers;
    }

    get books() {
        return this._books;
    }

    get readers() {
        return this._readers;
    }

    doHaveBook(requestedBook) {
        return this.books.some(book => book.bookId === requestedBook.bookId);
    }

    addBook(newBook) {
        if (this.doHaveBook(newBook)) {
            newBook.quantity++;
        } else {
            this.books.push(newBook);
        }

        return this.books;
    }

    addBooks(newBooks) {
        newBooks.forEach(el => {
            if (this.doHaveBook(el)) {
                el.quantity++;
            } else {
                this.books.push(el);
            }
        });

        return this.books;
    }
}