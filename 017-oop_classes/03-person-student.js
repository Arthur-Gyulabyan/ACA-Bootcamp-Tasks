// Create Person and Student classes.

class Person {
    constructor(firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
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

    get gender() {
        return this._gender;
    }

    set gender(value) {
        const lower = value.toLowerCase();

        if (lower === 'male' || lower === 'female') {
            this._gender = lower;
        } else {
            throw new Error('Non existing gender!!!');
        }
    }

    get age() {
        return this._age;
    }

    set age(value) {
        if (typeof value !== 'number' || (Number.isNaN(value) || value < 0 || value > 110)) {
            throw new Error('Invalid age!');
        }

        this._age = value;
    }
}

let user1 = new Person('Name', 'Surname', 'female', 23);
console.log(user1.age);
console.log(user1.age = 11);
