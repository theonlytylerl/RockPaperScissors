function getComputerChoice() {
    let number = Math.trunc(Math.random() * 3)
    if (number == 0) {
        let computerChoice = "Rock";
        return computerChoice
    } else if (number == 1) {
        let computerChoice = "Paper";
        return computerChoice
    } else {
        let computerChoice = "Scissors";
        return computerChoice
    }
}

console.log(getComputerChoice())
