#! /usr/bin/env node
class CoinFlipGame {
    sides = ['Heads', 'Tails'];
    playerScores = {
        player1: 0,
        player2: 0,
    };
    currentPlayer = 'player1';
    flipCoin() {
        const randomIndex = Math.floor(Math.random() * this.sides.length);
        return this.sides[randomIndex];
    }
    guessAndFlip(guess) {
        const result = this.flipCoin();
        if (guess === result) {
            this.playerScores[this.currentPlayer]++;
            return `${this.currentPlayer} guessed ${guess} and it was ${result}. Correct! Score: ${this.playerScores[this.currentPlayer]}`;
        }
        else {
            return `${this.currentPlayer} guessed ${guess} and it was ${result}. Incorrect. Score: ${this.playerScores[this.currentPlayer]}`;
        }
    }
    switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'player1' ? 'player2' : 'player1';
    }
    getScores() {
        return this.playerScores;
    }
    getCurrentPlayer() {
        return this.currentPlayer;
    }
}
// Example usage:
const game = new CoinFlipGame();
console.log(`Current player: ${game.getCurrentPlayer()}`);
console.log(game.guessAndFlip('Heads')); // Example guess
game.switchPlayer();
console.log(`Current player: ${game.getCurrentPlayer()}`);
console.log(game.guessAndFlip('Tails')); // Example guess
console.log('Scores:', game.getScores());
export {};
