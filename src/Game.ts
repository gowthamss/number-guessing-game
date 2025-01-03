import GameBuilder from './GameBuilder.ts';

class Game {
        private computerGuess: number;
        private difficultyLevel: number;
        private noOfChances: number;

    constructor(builder: GameBuilder) {
        this.computerGuess = Math.floor(Math.random() * 100) + 1;
        this.difficultyLevel = builder.getDifficultyLevel();
        this.noOfChances = builder.getNoOfChances();
    }

    static getBuilder() {
        return new GameBuilder();
    }

    getDifficultyLevel() {
        return this.difficultyLevel;
    }

    getNoOfChances() {
        return this.noOfChances;
    }

    getComputerGuess() {
        return this.computerGuess;
    }

    static displayWelcomeMessage() {
        console.log("Welcome to the Number Guessing Game!");
        console.log("I'm thinking of a number between 1 and 100.");
        console.log("You have 5 chances to guess the correct number.");
        
    }

    startGame() {
        console.log("Game started!");
    }
}

export default Game;