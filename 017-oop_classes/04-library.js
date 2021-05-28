// Describe a model of library.

class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
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
    constructor(title, author, bookId) {
        super(title, author);
        this._bookId = bookId;
    }

    toString() {
        return `"${this.title}" - ${this.author}.`;
    }
}


class LibraryBook extends Book {
    static idCounter = 0;

    constructor(title, author, quantity = 1) {
        super(title, author);
        this._bookId = LibraryBook.idCounter;
        this._quantity = quantity;

        LibraryBook.idCounter++;
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

    get bookId() {
        return this._bookId;
    }

    set bookId(value) {
        throw new Error('Book\'s ID can\'t be changed!');
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
    constructor(title, author, bookId, expirationDate) {
        super(title, author);
        this._expirationDate = expirationDate;
        this._isReturned = false;
        this._bookId = bookId;
    }

    get bookId() {
        return this._bookId;
    }

    set bookId(value) {
        throw new Error('Book\'s ID can\'t be changed!');
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

    get readerId() {
        return this._readerId;
    }

    set readerId(value) {
        throw new Error('ID cannot be changed!');
    }

    borrowBook(book, library) {
        const requestedBook = library.lendBook(book, this.readerId);

        if (requestedBook) {
            this.books.push(requestedBook);
        }
    }

    toString() {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Library {
    static getBookIndex(book, library) {
        return library.books.findIndex(curBook => book.isTheSameBook(curBook));
    }

    constructor(books = [], readers = []) {
        this._books = books;
        this._readers = readers;
    }

    get books() {
        return this._books;
    }

    set books(value) {
        let isLibraryBook;

        try {
            isLibraryBook = value.every(book => book instanceof LibraryBook);
        } catch (e) {
            throw new Error(e);
        }

        if (!isLibraryBook) {
            throw new Error('Books don\'t belong to library.');
        }

        this._books = value;
    }

    get readers() {
        return this._readers;
    }

    set readers(value) {
        let isReader;

        try {
            isReader = value.every(reader => reader instanceof Reader);
        } catch (e) {
            throw new Error(e);
        }

        if (!isReader) {
            throw new Error('Specified value should contain readers!');
        }

        this._readers = value;
    }

    doHaveBook(requestedBook) {
        return this.books.some(book => book.isTheSameBook(requestedBook) && book.quantity > 0);
    }

    addBook(newBook) {
        const index = Library.getBookIndex(newBook, this);
        if (index === -1) {
            const newLibraryBook = new LibraryBook(newBook.title, newBook.author);
            this.books.push(newLibraryBook);
        } else {
            this.books[index].increaseQuantityBy(1);
        }

        return this.books;
    }

    addBooks(newBooks) {
        newBooks.forEach(newBook => {
            const index = Library.getBookIndex(newBook, this);
            if (index === -1) {
                const newLibraryBook = new LibraryBook(newBook.title, newBook.author);
                this.books.push(newLibraryBook);
            } else {
                this.books[index].increaseQuantityBy(1);
            }
        });

        return this.books;
    }

    checkReadersId(readerId) {
        return this.readers.some(reader => reader.readerId === readerId);
    }

    lendBook(book, readerId) {
        const index = Library.getBookIndex(book, this);
        const foundBook = this.books[index];

        if (!this.checkReadersId(readerId)) {
            console.log('Library don\'t have such reader registered!');
            return null;
        }

        if (!this.doHaveBook(book)) {
            console.log('Library don\'t have the requested book!');
            return null;
        }

        foundBook.decreaseQuantityBy(1);
        return new ReaderBook(book.title, book.author, foundBook.bookId, '12-04');
    }
}

const nationalLibrary = new Library();

const book1 = new Book("You don't know JS", 'Kyle Simpson');
const book2 = new Book("Harry Potter", 'J. K. Rowling');
const book3 = new Book("The Old Man and the Sea", 'Ernest Hemingway');
const book4 = new Book("Permanent Record", 'Edward Snowden');
const book5 = new Book("The Lord of the Rings", 'J. R. R. Tolkien');

const books = [book1, book2, book3, book4];

const reader1 = new Reader('Arthur', 'Gyulabyan');
const reader2 = new Reader('John', 'Doe');

nationalLibrary.addBooks(books);
nationalLibrary.readers.push(reader1);

reader1.borrowBook(book3, nationalLibrary);
reader1.borrowBook(book5, nationalLibrary);

reader2.borrowBook(book1, nationalLibrary);

console.log(reader1);
console.log(reader2);
console.log(nationalLibrary);