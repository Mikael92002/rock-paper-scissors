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

console.log(getComputerChoice());