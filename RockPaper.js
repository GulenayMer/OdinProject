//..............//

// ------------------------------------------------------STEP 1 ----------------------//
// Computer chooses rock, scissors, paper randomly
// I write a function, because I need a particular task to be performed; 
// and as I have a kind of list of possible answers, I use Arrays.
// I found this built-in method (Math.floor(Math.random() * allAnswers.length)) to take the values out of the array randomly.

function computerPlay() { 
    const allAnswers = ["Rock", "Paper", "Scissors"]; 
    const randomAnswer = allAnswers[Math.floor(Math.random() * allAnswers.length)];
    return randomAnswer;
};

computerPlay();


// ---------------------------------------------------STEP 2-----------------------------------//
// I write another function which plays a round of "Rock", "Paper", "Scissors".
// I will have computerSelection and playerSelection as parameters, so that I can get both answers returned
// I will return a string as a message for the case when the both players give the answers 
// I already created a function in that computer chooeses a random answer, I also need a variable which contains players answer

// I need to do the function case insensitive 

// So I use my variables which contain answers as parameters in the playRound function

for (let round = 0; round < 5; round++) {
   
const computerSelection = computerPlay();
const playerSelection = prompt("Rock, Paper or Scissors?");

//........................Lets see the possible conditions and outcomes

function playRound (playerSelection, computerSelection){
    if (computerSelection === "Rock" && playerSelection === "Scissors"){
        return "You Lose! Rock beats Scissors"; 
    
    } else if (computerSelection === "Rock" && playerSelection === "Paper") {
        return "You Win! Paper beats Rock";
    
    } else if (computerSelection === "Rock" && playerSelection === "Rock") {
        return "Nobody wins";
    
    } else if (computerSelection === "Paper" && playerSelection === "Scissors") {
        return "You win! Scissors beats Paper";
    
    } else if (computerSelection === "Paper" && playerSelection === "Rock") {
        return "You Lose! Paper beats Rock";
    
    } else if (computerSelection === "Paper" && playerSelection === "Paper") {
        return "Nobody wins";
    
    } else if (computerSelection === "Scissors" && playerSelection === "Rock") {
        return "You win! Rock beats Scissors";
    
    } else if (computerSelection === "Scissors" && playerSelection === "Paper") {
        return "You Lose! Scissors beats Paper";
    
    } else if (computerSelection === "Scissors" && playerSelection === "Scissors") {
        return "Nobody wins";
    } else {
        return "Play is over!";
    };
    
             
};

console.log(playRound(playerSelection, computerSelection));

};

//console.log(playRound(playerSelection, computerSelection));



//--------------------------------------------------STEP 3---------------------------------------------//
// 5 rounds play -- the game keeps score and reports a winner or looser
// I will write a new function



















