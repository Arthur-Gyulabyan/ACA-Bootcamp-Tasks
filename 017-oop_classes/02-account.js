// Create an Account class.

class Account {
    constructor(name, balance) {
        this._id = Account.counter;
        this._name = name;
        this._balance = balance;

        Account.counter++;
    }

    // Generator for id
    static counter = 0;

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.id === accountSecond.id;
    }

    get id() {
        return this._id;
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

    get balance() {
        return this._balance;
    }

    set balance(value) {
        if (typeof value !== 'number' || Number.isNaN(value) || value < 0) {
            throw new Error('Invalid balance value!');
        }

        this._balance = value;
    }

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (this.balance - amount >= 0) {
            this.balance -= amount;
            return this.balance;
        } else {
            throw new Error('Amount exceeded balance!');
        }
    }

    transferTo(anotherAccount, amount) {
        this.debit(amount);
        anotherAccount.credit(amount);
        return this.balance;
    }

    toString() {
        return `${this.name}'s balance is $${this.balance}`;
    }
}

let savingAcc = new Account('Saving account', 2000);
let cardAcc = new Account('Card account', 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account', _balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance: 1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); // "Amount exceeded balance!"
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000

let anotherAcc = savingAcc;

console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's balance is $1400.
