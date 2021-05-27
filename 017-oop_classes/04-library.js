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
        return `"${this.title}" -${this.author}`;
    }
}

const book1 = new Book("You don't know JS", 'Kyle Simpson');
console.log(book1.title);
