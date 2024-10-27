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
    const buttons = document.querySelector(".buttons");
    buttons.addEventListener("click", (event) => {
        switch(event.target.id) {
            case "rock":
                playRound("Rock", getComputerChoice());
                break;
            case "paper":
                playRound("Paper", getComputerChoice());
                break;
            case "scissors":
                playRound("Scissors", getComputerChoice());
                break;
            default:
                return "ERROR";
        }
    })
}

let humanScore = 0;
let computerScore = 0;
let output = '';

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        output = `${humanChoice} ties ${computerChoice}`;
        console.log(output);
    }
    else if (humanChoice === "Rock" && computerChoice == "Paper") {
        output = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        console.log(output);
    }
    else if (humanChoice === "Rock" && computerChoice == "Scissors") {
        output = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        console.log(output);
    }
    else if (humanChoice === "Paper" && computerChoice == "Scissors") {
        output = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        console.log(output);
    }
    else if (humanChoice === "Paper" && computerChoice == "Rock") {
        output = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        console.log(output);
    }
    else if (humanChoice === "Scissors" && computerChoice == "Rock") {
        output = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        console.log(output);
    }
    else if (humanChoice === "Scissors" && computerChoice == "Paper") {
        output = `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        console.log(output);
    }

    const buttons = document.querySelector(".buttons");
    const div = document.createElement("div");
    div.textContent = output;
    div.className = "each";
    buttons.appendChild(div);
    const scores = document.createElement("div");
    scores.textContent = `Human: ${humanScore} Computer: ${computerScore}`;
    scores.className = "each";
    buttons.appendChild(scores);

    if (humanScore === 5 || computerScore === 5) {
        const result = document.createElement("div");
        const rock = document.querySelector("#rock");
        rock.disabled = true;
        const paper = document.querySelector("#paper");
        paper.disabled = true;
        const scissors = document.querySelector("#scissors");
        scissors.disabled = true;
        if (humanScore === 5) {
            result.textContent = "Human win!";
            result.className = "each";
            buttons.appendChild(result);
        } else {
            result.textContent = "Computer win!"
            result.className = "each";
            buttons.appendChild(result);
        }

        const restart = document.createElement("button");
        restart.className = "restart";
        restart.textContent = "Restart";
        buttons.append(restart);
        restart.addEventListener("click", () => {
            humanScore = 0;
            computerScore = 0;
            const divs = document.querySelectorAll(".each");
            divs.forEach(div => div.remove());
            const restart = document.querySelector(".restart");
            restart.remove();
            rock.disabled = false;
            paper.disabled = false;
            scissors.disabled = false;
        })
    }
}

getHumanChoice();