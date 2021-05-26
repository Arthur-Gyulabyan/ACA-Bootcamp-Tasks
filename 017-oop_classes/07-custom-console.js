// Create a CustomConsole class

class CustomConsole {
    constructor(head) {
        this.head = head;
        this.historyArr = [];
    }

    log(...args) {
        // let argsStrArr = args.forEach
        let argsStr = '';

        if (args.length === 0) {
            return '';
        }

        if (args.length === 1) {
            argsStr = `${this.head}: ${JSON.stringify(...args)}`;
        } else {
            const tail = args.slice(1);

            tail.forEach((el, index, arr) => {
                if (index === arr.length - 1) {
                    argsStr += JSON.stringify(el);
                } else {
                    argsStr += JSON.stringify(el) + ', ';
                }
            });

            argsStr = `${args[0]} ${argsStr}`;
        }

        this.historyArr.push(argsStr);
        return argsStr;
    }

    history() {
        if (this.historyArr.length === 0) {
            return `History is empty.`;
        }

        return this.historyArr;
    }

    clearHistory() {
        this.historyArr = [];
        return `History cleared!`;
    }
}

const myConsole = new CustomConsole('Regular');
const fancyConsole = new CustomConsole('Fancy');

console.log(myConsole.log([0, 1, 2, 3])); // "Regular: [0,1,2,3]"
console.log(fancyConsole.log({ a: 1, b: 2 })); // "Fancy: {"a":1,"b":2}"
console.log(myConsole.log('ok : ', 1, 2, 3)); // "ok :  1, 2, 3"

console.log(myConsole.history()); // [ 'Regular: [0,1,2,3]', 'ok :  1, 2, 3' ]
console.log(myConsole.clearHistory()); // History cleared!
console.log(myConsole.history()); // History is empty.
