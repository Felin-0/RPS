
function getComputerChoice() { 
    let choice = Math.floor(Math.random() * 3)

    if (choice === 0) {
        return "rock"
    } else if (choice === 1) {
        return "paper"
    } else {
        return "scissors"
    } 
}


function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
}

/*const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection, computerSelection);
console.log(result);
console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);*/


function playGame() {
    //variables to keep track of scores
    let playerScore = 0;
    let computerScore = 0;

    //function to play a single round of the game
    function playRound(playerChoice, computerChoice) {
        //compare the choices and determine the winner
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }

}
    //five rounds of the game
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);
        console.log(result);
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`);
    }
    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry! You lost the game.");
    } else {
        console.log("It's a tie game!");
    }
}

playGame();