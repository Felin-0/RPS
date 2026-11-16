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
console.log(getComputerChoice());

function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        alert("Invalid choice. Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
}
console.log(getHumanChoice());