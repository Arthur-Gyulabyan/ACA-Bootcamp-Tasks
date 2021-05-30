// Create Person and Student classes.

class Person {
    constructor({ firstName, lastName, gender, age } = {}) {
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
        if (typeof value !== 'number' || Number.isNaN(value) || value < 0 || value > 110) {
            throw new Error('Invalid age!');
        }

        this._age = value;
    }

    toString() {
        return `${this.firstName} ${this.lastName}, ${this.age} years old.`;
    }
}

const rawUser1 = {
    firstName: 'Arthur',
    lastName: 'Gyulabyan',
    gender: 'male',
    age: 22,
};

let user1 = new Person(rawUser1);
console.log(user1); // Arthur Gyulabyan, 22 years old.

class Student extends Person {
    constructor({ firstName, lastName, gender, age, year, fee, program = [] }) {
        super(rawUser1);
        this._year = year;
        this._fee = fee;
        this._program = program;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== 'number' || value < 1) {
            throw new Error('Year can be from 1 to 6!');
        }

        if (value === 7) {
            console.log(`${this.firstName} ${this.lastName} graduated from university!`);
            this._year = 'graduated';
            return;
        }

        this._year = value;
    }

    get fee() {
        return this._fee;
    }

    set fee(value) {
        if (typeof value !== 'number' || value < 0 || value > 10000) {
            throw new Error('Invalid value of fee!');
        }

        this._fee = value;
    }

    get program() {
        return this._program;
    }

    set program(value) {
        if (value.isArray === false) {
            throw new Error('Invalid program!');
        }

        this._program = value;
    }

    isAllPassed() {
        return this.program.every((el) => el.grade >= 50);
    }

    passExam(programName, grade) {
        const index = this.program.findIndex((el) => el.programName === programName);

        if (index !== -1) {
            this.program[index].grade = grade;
        }

        if (this.isAllPassed()) {
            this.year++;
            this.program.forEach((el) => (el.grade = undefined));
            return `${this.firstName} ${this.lastName} successfully passed all exams!`;
        } else {
            return `${this.firstName} ${this.lastName} has exam(s) to pass yet.`;
        }
    }

    toString() {
        return super.toString();
    }
}

const rawStudent1 = {
    firstName: 'Arthur',
    lastName: 'Gyulabyan',
    gender: 'male',
    age: 22,
    year: 6,
    fee: 1200,
    program: [
        { programName: 'math', grade: 10 },
        { programName: 'english', grade: undefined },
        { programName: 'data structures', grade: undefined },
        { programName: 'theory of computation', grade: undefined },
    ],
};

const student1 = new Student(rawStudent1);

console.log(student1.passExam('math', 70)); // Arthur Gyulabyan has exam(s) to pass yet.
console.log(student1.passExam('english', 90)); // Arthur Gyulabyan has exam(s) to pass yet.
console.log(student1.passExam('data structures', 90)); // Arthur Gyulabyan has exam(s) to pass yet.
console.log(student1.passExam('theory of computation', 10)); // Arthur Gyulabyan has exam(s) to pass yet.
console.log(student1.passExam('theory of computation', 100)); // Arthur Gyulabyan successfully passed all exams!
console.log(student1.year); // graduated
console.log(student1.toString()); // Arthur Gyulabyan, 22 years old.
