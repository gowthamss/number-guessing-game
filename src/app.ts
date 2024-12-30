#!/usr/bin/env node

import prompts from 'prompts';
import Game from './Game.js';

const startGame = async () => {
    Game.displayWelcomeMessage();

    console.log();
    console.log("Please select the difficulty level:");
    console.log("1. Easy (10 chances)");
    console.log("2. Medium (5 chances)");
    console.log("3. Hard (3 chances)");

    (async () => {
        const response = await prompts({
            type: 'number',
            name: 'difficulty',
            message: 'Enter your choice (1-3):',
            validate: value => value < 1 || value > 3 ? `Please enter a valid choice (1-3)` : true
        });

        const game = Game.getBuilder().setDifficultyLevel(response.difficulty).setNoOfChances().build();

        console.info(`Great! You have selected the ${game.getDifficultyLevel() === 1 ? 'Easy' : game.getDifficultyLevel() === 2 ? 'Medium' : 'Hard'} level.`);
        console.info(`Let's start the game!`);
        
        // game.startGame();
        console.log(game.getComputerGuess());
        let choices: number = game.getNoOfChances();
        while (choices > 0) {
            const guess = await prompts({
                type: 'number',
                name: 'guess',
                message: 'Enter your guess:',
                validate: value => value < 1 || value > 100 ? `Please enter a valid number (1-100)` : true
            });

            if (guess.guess === game.getComputerGuess()) {
                console.log(`Congratulations! You have guessed the correct number in ${game.getNoOfChances() - choices} attempts.`);
                break;
            } else if (game.getComputerGuess() < guess.guess) {
                console.log(`Incorrect! The number is less than ${guess.guess}.`);
                choices--;
            } else {
                console.log(`Incorrect! The number is greater than ${guess.guess}.`);
                choices--;
            }

            if (choices === 0) {
                console.log(`Sorry! You have exhausted all your chances. The correct number was ${game.getComputerGuess()}.`);
                console.log(`Do you want to play again?`);
                const playAgain = await prompts({
                    type: 'confirm',
                    name: 'confirmation',
                    message: 'Enter your choice (y/n):',
                    initial: false
                });

                if (playAgain.confirmation) {
                    startGame();
                } else {
                    console.log(`Thank you for playing!`);
                }
            }
        }
    })();

    // (async () => {

    //     // console.log(guess.choice);
    // })();
};

startGame();

