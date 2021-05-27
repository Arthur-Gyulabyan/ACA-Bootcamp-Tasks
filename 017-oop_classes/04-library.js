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

    toString() {
        return `"${this.title}" - ${this.author}. ID - ${this.bookId}`;
    }
}

const baseBook1 = new LibraryBookBase('Harry Potter', 'J. K. Rowling');
console.log(baseBook1.title);
console.log(baseBook1.author);
