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



function playGame() {
    let humanScore = 0
    let computerScore = 0
    let [x, y] = [humanScore, computerScore]
    
    function playRound(humanChoice, computerChoice) {
        let human = 0;
        let computer = 0;
        let choices = [humanChoice, computerChoice]
        for (let i = 0; i < 2; i++) {
            if (choices[i] === "Rock") {
                if (i === 0) {
                    human = 0;
                } else {
                    computer = 0;
                }
            } else if (choices[i] === "Paper") {
                if (i === 0) {
                    human = 1;
                } else {
                    computer = 1;
                }
            } else {
                if (i === 0) {
                    human = 2;
                } else {
                    computer = 2;
                }
            }
        }
    
        let result = (computer - human) % 3;
        console.log("Your pick: " + humanChoice + "      Computer pick: " + computerChoice)
        if (result === -1 || result === 2) {
            console.log("You win!")
            humanScore += 1
        } else if (result === 1 || result === -2) {
            console.log("You lose :(")
            computerScore += 1
        } else {
            console.log("It's a tie!")
        }
        return [humanScore, computerScore]
    }

    for (let k = 0; k < 5; k++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        [x, y] = playRound(humanSelection, computerSelection)
    }
    return ("You: " + x + "    Computer: " + y)
}

console.log(playGame())