#! /usr/bin/env node
import inquirer from "inquirer";

// Coin Flip Game for Two Players in TypeScript


type CoinSide = 'Heads' | 'Tails';

class CoinFlipGame {
    private sides: CoinSide[] = ['Heads', 'Tails'];
    private playerScores: { [key: string]: number } = {
        player1: 0,
        player2: 0,
    };
    private currentPlayer: 'player1' | 'player2' = 'player1';

    public flipCoin(): CoinSide {
        const randomIndex = Math.floor(Math.random() * this.sides.length);
        return this.sides[randomIndex];
    }

    public guessAndFlip(guess: CoinSide): string {
        const result = this.flipCoin();
        if (guess === result) {
            this.playerScores[this.currentPlayer]++;
            return `${this.currentPlayer} guessed ${guess} and it was ${result}. Correct! Score: ${this.playerScores[this.currentPlayer]}`;
        } else {
            return `${this.currentPlayer} guessed ${guess} and it was ${result}. Incorrect. Score: ${this.playerScores[this.currentPlayer]}`;
        }
    }

    public switchPlayer(): void {
        this.currentPlayer = this.currentPlayer === 'player1' ? 'player2' : 'player1';
    }

    public getScores(): { [key: string]: number } {
        return this.playerScores;
    }

    public getCurrentPlayer(): 'player1' | 'player2' {
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

