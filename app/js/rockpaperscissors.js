////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    move = move || getInput();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return /* Your Expression */;
}

function getComputerMove(move) {
    move = move || randomPlay();
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return /* Your Expression */;
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if ((playerMove === "rock") && (computerMove === "rock")) {
            winner = "tie"; 
        } else if 
        ((playerMove === "rock") && (computerMove === "scissors")) {
            winner = "player";
        } else if 
        ((playerMove === "rock") && (computerMove === "paper")) {
            winner = "computer";
        } else if 
        ((playerMove === "scissors") && (computerMove === "rock")) {
            winner = "computer";
        } else if
        ((playerMove === "scissors") && (computerMove === "scissors")) {
            winner = "tie";
        } else if 
        ((playerMove === "scissors") && (computerMove === "paper")) {
            winner = "player";
        } else if
        ((playerMove === "paper") && (computerMove === "rock")) {
            winner = "player";
        } else if 
        ((playerMove === "paper") && (computerMove === "scissors")) {
            winner = "computer";
        } else  
            winner = "tie";
        
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0; 

while (playerWins < 5 && computerWins < 5) {


var winvari = getWinner(getPlayerMove(), getComputerMove());


    if (winvari === "player") {
        playerWins += 1; 
    } else if 
        (winvari === "computer") {
        computerWins += 1;
    } else
        playerWins = playerWins;
        computerWins = computerWins;

    if (playerWins === 5) {
        return "Player has won 5 games!";
    } else if (computerWins === 5) {
        return "Computer has won 5 games!";
    } else
    console.log([playerWins, computerWins]);
    
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */

    }
    return [playerWins, computerWins];
}

