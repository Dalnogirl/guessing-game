class GuessingGame {
    constructor() {
        this.array = [];
        this.guessNumber;
        this.minimal;
        this.maximum;
        this.result;
    }

    setRange(min, max) {
        for (let i = min; i <= max; i++) {
            this.array.push(i);
        }
    }
    guess() {
        this.guessNumber = this.array[Math.floor(this.array.length / 2)]
        return this.guessNumber;
    }

    lower() {
        this.array = this.array.slice(0, this.array.indexOf(this.guessNumber) + 1);
    }

    greater() {
        this.array = this.array.slice(this.array.indexOf(this.guessNumber), this.array.length);
    }
}

module.exports = GuessingGame;
