// Crate dictionary class

class Dictionary {
    constructor(obj) {
        for (let key in obj) {
            this[key] = obj[key];
        }
    }

    get(key) {
        return this[key];
    }
}

const dict = new Dictionary({ firstKey: 'JavaScript', secondKey: 22 });
console.log(dict.get('firstKey'));
console.log(dict);
