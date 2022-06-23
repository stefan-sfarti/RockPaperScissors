let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;
let rockButton = document.getElementById("rock");
let paperButton = document.getElementById("paper");
let scissorsButton = document.getElementById("scissors");
let playerChoice = document.getElementById("your-choice");
let computerChoice = document.getElementById("opponent-choice");
let score = document.getElementById("score");

function generateRandomChoice(){
    let randomChoice = Math.ceil(Math.random()*3);
    if (randomChoice === 1){
        return "Rock";
    }else if(randomChoice === 2){
        return "Paper";
    }else return "Scissors";
}

function playRound (playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Scissors"){
        playerScore++;
    }else if (playerSelection === "Rock" && computerSelection === "Paper"){
        computerScore++;
    }else if (playerSelection === "Paper" && computerSelection === "Rock"){
        playerScore++;
    }else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        computerScore++;
    }else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        playerScore++;
    }else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        computerScore++;
    }
}
function rockF (){
    playerSelection = "Rock";
    computerSelection = generateRandomChoice();
    playRound(playerSelection, computerSelection);
    playerChoice.append("Rock");
    computerChoice.append(computerSelection);
}
function paperF (){
    playerSelection = "Paper";
    computerSelection = generateRandomChoice();
    playRound(playerSelection, computerSelection);
    playerChoice.append("Paper");
    computerChoice.append(computerSelection);
}
function scissorsF (){
    playerSelection = "Scissors";
    computerSelection = generateRandomChoice();
    playRound(playerSelection, computerSelection);
    playerChoice.append("Scissors");
    computerChoice.append(computerSelection);
}
function keepScore () {
    score.innerHTML = "SCORE:" + playerScore + "-" + computerScore;
}
function resetScore () {
    computerScore = 0;
    playerScore = 0;
}
function resetChoice() {
    playerChoice.innerHTML = "Your choice:";
    computerChoice.innerHTML = "Opponent's choice:";
}
function game () {
    if (playerScore < 5 && computerScore < 5) {
        scissorsButton.onclick = function () {
            resetChoice();
            scissorsF();
            keepScore();
            checkWinner();
        }
        rockButton.onclick = function () {
            resetChoice();
            rockF();
            keepScore();
            checkWinner();
        }
        paperButton.onclick = function () {
            resetChoice();
            paperF();
            keepScore();
            checkWinner();
        }
    }
}
function checkWinner(){
    if (playerScore >= 5) {
        resetScore();
        alert("You win!");
    }
    else if (computerScore >=5) {
        resetScore();
        alert("You lost!");
    }
}

game();















