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
        if (typeof value !== 'number' || Number.isNaN(value)) {
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
        return `Account name: "${this.name}" | Balance: ${this.balance}$`;
    }
}

const savingAcc = new Account('Saving account', 2000);
const cardAcc = new Account('Card account', 1000);
// console.log(savingAcc.credit(1200)); // 3200
// console.log(savingAcc.debit(2200)); // 3200
// console.log(savingAcc.debit(1200)); // "Amount exceeded balance!"
console.log(savingAcc.transferTo(cardAcc, 1000));

console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString());
