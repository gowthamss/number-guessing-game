import Game from "./Game.ts";

class GameBuilder {
    private difficultyLevel: number = 0;
    private noOfChances: number = 0;

    getDifficultyLevel() {
        return this.difficultyLevel;
    }

    setDifficultyLevel(difficulty: number) {
        this.difficultyLevel = difficulty;
        return this;
    }

    getNoOfChances() {
        return this.noOfChances;
    }

    setNoOfChances() {
        if (this.difficultyLevel === 1) {
            this.noOfChances = 10;
        } else if (this.difficultyLevel === 2) {
            this.noOfChances = 5;
        } else if (this.difficultyLevel === 3) {
            this.noOfChances = 3;
        } else {
            throw new Error("Invalid difficulty level");
        }
        return this;
    }

    build() {
        return new Game(this);
    }
}

export default GameBuilder;