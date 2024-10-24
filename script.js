function getComputerChoice() {
    let random = Math.random();
    let result;
    if (random <= 1/3) {
        result = "Rock";
    }
    else if (random <= 2/3) {
        result = "Paper";
    }
    else {
        result = "Scissors";
    }
    return result;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper, scissors?").toLowerCase();
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`${humanChoice} ties ${computerChoice}`);
        }
        else if (humanChoice === "Rock" && computerChoice == "Paper") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else if (humanChoice === "Rock" && computerChoice == "Scissors") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if (humanChoice === "Paper" && computerChoice == "Scissors") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else if (humanChoice === "Paper" && computerChoice == "Rock") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
        else if (humanChoice === "Scissors" && computerChoice == "Rock") {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
        else if (humanChoice === "Scissors" && computerChoice == "Paper") {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        }
    }
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if (humanScore > computerScore) {
        console.log("You win!");
    }
    else if (humanScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("Game ties!");
    }
    console.log(`You score ${humanScore}!`);
    console.log(`Computer scores ${computerScore}!`);
}

playGame();