#!/usr/bin/env node
import inquirer from 'inquirer';

console.log(
    `Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
`);

let attempts = 0
let chances
let time = new Date()
const guessNumber = async () => {
    let computer_guess = Math.floor(Math.random() * 101)

    const game_level = await inquirer
        .prompt([
            {
                type: "list",
                name: "level",
                message: "Please select a difficulty level: ",
                choices: ["1. Easy (10 chances)", "2. Medium (5 chances)", "3. Hard (3 chances)"]
            }

        ])
    const level = game_level.level

    if (level.includes('Easy')) {
        chances = 10
    } else if (level.includes('Medium')) {
        chances = 5
    } else {
        chances = 3
    }

    console.log(`You have ${chances} chances to guess the correct number.`)

    let hasGuessedRight = false

    while (!hasGuessedRight && chances > attempts) {
        attempts++


        const answer = await inquirer
            .prompt([
                {
                    type: "number",
                    name: "user_guess",
                    message: "Enter your guess:",
                    validate: (input) => {
                        if (isNaN(input)) return 'Please enter a valid number'
                        if (input < 1 || input > 100) return 'Please enter a number btw 1 and 100'
                        return true
                    }

                }

            ])

        const guess = answer.user_guess

        if (computer_guess > guess) {
            console.log(`📉 The number is greater than ${guess}`)
        } else if (computer_guess < guess) {
            console.log(`📈 The number is less than ${guess}`);

        } else {
            const currentTimeInSeconds = (new Date() - time) / 1000
            console.log(`\n🎉Congratulations! You guessed the correct number after ${attempts} attempts after ${currentTimeInSeconds}s\n`);
            hasGuessedRight = true
        }



    }
    if (attempts >= chances && !hasGuessedRight) {
        console.log(`\nSorry you have exhausted your chances`)
        console.log(`The number is ${computer_guess}🥱`);

    }

    // Ask if player wants to play again
    const playAgain = await inquirer.prompt([{
        type: 'confirm',
        message: "Do you want to play again?: ",
        name: "restart",
        default: false
    }])

    if (playAgain.restart) {
        attempts = 0
        computer_guess = Math.floor(Math.random() * 101)
        await guessNumber()
    } else {
        console.log('Thanks for playing! Goodbye! 👋');

    }
}


guessNumber().catch((error) => console.error(error))
