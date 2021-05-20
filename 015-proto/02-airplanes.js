// Give airplanes the ability to takeoff and land.

const Airplane = {
    name: 'Airplane',

    takeOff: function () {
        this.isFlying = true;
    },

    land: function () {
        this.isFlying = false;
    },
};

const millenniumFalcon = Object.create(Airplane);
millenniumFalcon.isFlying = false;

const mig = Object.create(Airplane);
mig.isFlying = false;

const raptor = Object.create(Airplane);
raptor.isFlying = false;

millenniumFalcon.takeOff();
raptor.takeOff();

console.log(millenniumFalcon.isFlying, mig.isFlying, raptor.isFlying); // true false true

millenniumFalcon.land();
console.log(millenniumFalcon.isFlying); // false
