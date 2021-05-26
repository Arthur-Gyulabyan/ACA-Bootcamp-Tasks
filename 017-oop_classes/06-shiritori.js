// Create shiritori game (function constructor)

const Shiritori = function () {
    this.words = [];
    this.gameOver = false;
};

Shiritori.prototype.play = function (wordInput) {
    if (this.gameOver === false) {
        const word = wordInput.trim().toLowerCase();

        if (this.words.length === 0) {
            this.words.push(word);
            return this.words;
        }

        const lastWord = this.words[this.words.length - 1];
        const lastWordLastLetter = lastWord[lastWord.length - 1];
        const firstLetter = word[0];

        for (const el of this.words) {
            if (el === word) {
                this.gameOver = true;
                return `Game Over! "${word}" has already been said.`;
            }
        }

        if (firstLetter !== lastWordLastLetter) {
            this.gameOver = true;
            return `Game Over! "${word}" does not start with "${lastWordLastLetter}".`;
        }

        this.words.push(word);
        return this.words;
    } else {
        return `Game is over. Please, reset the game!`;
    }
};

Shiritori.prototype.restart = function () {
    this.words = [];
    this.gameOver = false;
};

const myShiritori = new Shiritori();

console.log(myShiritori.play('America'));
console.log(myShiritori.play('Amsterdam'));
console.log(myShiritori.play('Moscow'));
console.log(myShiritori.play('world'));
console.log(myShiritori.play('doll'));
console.log(myShiritori.play('love'));
console.log(myShiritori.play('elevator'));
console.log(myShiritori.play('love'));
console.log(myShiritori.play('time'));
