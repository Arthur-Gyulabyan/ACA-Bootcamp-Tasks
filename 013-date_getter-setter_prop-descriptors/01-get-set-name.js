// Write an object with getter/setter field name.

const obj = {
    _name: [],

    set name(value) {
        if (typeof value === 'string') {
            const names = value.split(', ');
            obj._name = names.map((el) => [el, el.length]);
        }
    },

    get name() {
        return obj._name;
    },
};

console.log(obj.name); // []

obj.name = 'Vrezh, Artavazd';

console.log(obj.name); // [['Vrezh', 7], ['Artavazd', 10]]
