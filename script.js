console.log("Hello World");

function getComputerChoice() {
    let choice = Math.random(0, 1);
    if (choice <= 0.33) {
        console.log(choice);
        return "rock";
    }
    else if (choice <= 0.66) {
        console.log(choice);
        return "paper";
    } else
        console.log(choice);
    return "scissors";
}

function getHumanChoice() {

    while (true) {
        let humanChoice = prompt("Enter \"rock\", \"paper\", or \"scissors\": ");
        humanChoice.toLowerCase();
        if (humanChoice == "rock" || humanChoice == "paper" || humanChoice == "scissors") {
            return humanChoice;
        }
        else console.log("Invalid choice. Try again lil boy");
    }
}

let playerScore = 0;
let computerScore = 0;

let humanPrompt = alert("Click rock, paper, or scissors");


function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
        case "rock":
            if (computerChoice == "paper") {
                console.log("You lose, paper wins!");
                computerScore++;
            }
            else if (computerChoice == "scissors") {
                console.log("You win, rock beats scissors!");
                playerScore++;
            }
            else console.log("Tie! Neither of you goofballs win!");
            break;
        case "paper":
            if (computerChoice == "scissors") {
                console.log("You lose, scissors wins!");
                computerScore++;
            }
            else if (computerChoice == "rock") {
                console.log("You win, paper beats rock!");
                playerScore++;
            }
            else console.log("Tie! Neither of you nigbeerians wins!");
            break;
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose! Get crushed lil neegus!");
                computerScore++;
            }
            else if (computerChoice == "paper") {
                console.log("You win, scissors beats paper!");
                playerScore++;
            }
            else console.log("Tie! Ain't no way you think you had a shot!");
            break;
    }
}
// let rounds = 0;
// while(rounds!=5){
//     const playerChoice = getHumanChoice();
//     const computerChoice = getComputerChoice();
//     playRound(playerChoice, computerChoice);
//     rounds++;
//     console.log(`Current score is: You: ${playerScore}, Computer: ${computerScore}`);
// }


const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");
rockButton.setAttribute("id", "buttons");
paperButton.setAttribute("id", "buttons");
scissorsButton.setAttribute("id", "buttons");
rockButton.textContent = "rock";
paperButton.textContent = "paper";
scissorsButton.textContent = "scissors";
const scoreDiv = document.createElement("div");
scoreDiv.textContent = "Score: " + playerScore + "(YOU) " + computerScore + "(COMP)";

const victoryDiv = document.createElement("div");

const body = document.querySelector("body");
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);
body.appendChild(scoreDiv);
body.appendChild(victoryDiv);

const button = document.querySelectorAll("#buttons");


button.forEach((butts) => {
    butts.addEventListener("click", () => {
        const humanChoice = butts.textContent;
        const computerChoice = getComputerChoice();
        if (playerScore < 5 && computerScore < 5) {
            playRound(humanChoice, computerChoice);
            scoreDiv.textContent = "Score: " + playerScore + "(YOU) " + computerScore + "(COMP)";
            if (playerScore == 5) {
                victoryDiv.textContent = "huh... didn't think you had it in you."
            }
            else if (computerScore == 5) {
                victoryDiv.textContent = "another day another number in the system"
            }
        }
        console.log("player's: " + playerScore);
        console.log("comps: " + computerScore);
    })
})




// button.addEventListener("click", (selection) =>{
//     console.log("youre clicking");
//     console.log(button.textContent);
//     playRound(button.textContent, getComputerChoice)
// })
