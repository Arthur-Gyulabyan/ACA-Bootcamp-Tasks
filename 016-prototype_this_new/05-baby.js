// Create Baby class, which extends the Person class.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.stomach = [];
    }

    eat(food) {
        const edible = [
            'burger',
            'pizza',
            'pasta',
            'apple',
            'carrot',
            'kebab',
            'cheese',
            'milk',
            'mash',
        ];

        if (edible.indexOf(food) !== -1 && this.stomach.length < 11) {
            this.stomach.push(food);
        }
    }

    poop() {
        this.stomach = [];
    }

    toString() {
        return `${this.name}, ${this.age}`;
    }
}

class Baby extends Person {
    constructor(name, age, favoriteToy) {
        super(name, age);
        this.favoriteToy = favoriteToy;
    }

    play() {
        return `Playing with ${this.favoriteToy}.`;
    }
}

const morgan = new Baby('Morgan', '3', 'doll');

morgan.eat('milk');
morgan.eat('mash');
console.log(morgan);
morgan.poop();
console.log(morgan);
console.log(morgan.play()); // "Playing with doll."
console.log(morgan.toString()); // "Morgan, 3"
