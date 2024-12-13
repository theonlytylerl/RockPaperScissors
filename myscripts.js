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

function getHumanChoice() {
    while (true) {
        let input = prompt("Please pick 'Rock,' 'Paper,' or 'Scissors'")
        let choice = input.charAt(0).toUpperCase() + input.slice(1)
        if (choice == "Rock" || choice == "Paper" || choice == "Scissors") {
         return choice
         break;
        } else {
            console.log("Please enter a valid choice")
        }
    }
}

console.log(getHumanChoice())
