let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return `Its a draw! You both threw ${playerSelection}`
    }
    else if(playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors"){
        playerScore++
        return `You win! Rock beats Scissors.`
    }
    else if(playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock"){
        playerScore++
        return `You win! Paper beats Rock.`
    }
    else if(playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper"){
        playerScore++
        return `You win! Scissors beats paper.`
    }
    else{
        computerScore++
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}
function computerPlay(){
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock"
        case 1:
            return "Paper"
        case 2:
            return "Scissors"
        default:
            return "Error! Invalid computer play."
    }
}

function play(){
    const numRounds=5;
    for (let round = 0; round < numRounds; round++) {
        const playerSelection = prompt("Choose your weapon. Rock, Paper or Scissors? ")
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection,computerSelection)) 
    }
}
play();