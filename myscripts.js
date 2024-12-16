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
    let roundCount = 0
    
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

        const results = document.querySelector(".results");
        const roundResults = document.querySelector(".roundResults")
        roundResults.innerText = `You picked ${humanChoice} and they picked ${computerChoice}.`

        if (roundCount > 0) {
            results.removeChild(results.children[0])
        }

        if (result === -1 || result === 2) {
            const whoWon = document.createElement("span");
            whoWon.textContent = "You win!"
            results.appendChild(whoWon)
            humanScore += 1;
        } else if (result === 1 || result === -2) {
            const whoWon = document.createElement("span");
            whoWon.textContent = "You lose :("
            results.appendChild(whoWon)
            computerScore += 1;
        } else {
            const whoWon = document.createElement("span");
            whoWon.textContent = "It's a tie. Wow!"
            results.appendChild(whoWon)
            console.log("It's a tie!");
        }

        const roundScore = document.querySelector(".score")
        roundScore.textContent = `You: ${humanScore} Computer: ${computerScore}`
        roundCount += 1

        if (humanScore == 5 || computerScore == 5) {
            for (let i = 0; i < button.length; i++){
                button[i].disabled = "true";
            }
            
            const victory = document.createElement("div");
            if (humanScore == 5) {
                victory.textContent = "You are crowned the victor of Rock Paper Scissors!"
            } else {
                victory.textContent = "You let the computer become king :( maybe try again another day."
            }
            roundScore.appendChild(victory)
        }

        return [humanScore, computerScore]
    }

    const button = document.querySelectorAll("button");
        for (let i = 0; i < button.length; i++){
        button[i].addEventListener('click', () => {
            let computerSelection = getComputerChoice();
            let humanSelection = button[i].textContent;
            
            return playRound(humanSelection, computerSelection);
        })
    }

    // Controls the amount of rounds played in a game, k < "how many rounds"
    // for (let k = 0; k < 1; k++) {
    //     let humanSelection = getHumanChoice();
    //     let computerSelection = getComputerChoice();
    //     [x, y] = playRound(humanSelection, computerSelection)
    // }

    return ("You: " + x + "    Computer: " + y)
}

playGame()