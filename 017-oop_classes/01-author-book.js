// Create Author and Book classes

class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
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
