// Crate car constructor

const Car = function (model, milesPerGallon) {
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
};

Car.prototype.fill = function (gallons) {
    this.tank += gallons;
};

Car.prototype.drive = function (distance) {
    const possibleDistance = this.tank * this.milesPerGallon;

    if (this.tank - distance / this.milesPerGallon <= 0) {
        this.odometer += possibleDistance;
        this.tank = 0;
        console.log(`I ran out of fuel at ${this.odometer} miles!`);
        return;
    }

    this.odometer += distance;
    this.tank -= distance / this.milesPerGallon;
};

let mercedes = new Car('Mercedes', 18);
let bmw = new Car('BMW', 25);

mercedes.fill(10); // tank: 10
console.log(mercedes);
mercedes.drive(380); // I ran out of fuel at 180 miles!
console.log(mercedes);
mercedes.fill(15);
console.log(mercedes);
mercedes.drive(180);
console.log(mercedes);
mercedes.drive(155); // I ran out of fuel at 450 miles!
console.log(mercedes); // { model: 'Mercedes', milesPerGallon: 18, tank: 0, odometer: 450 }
