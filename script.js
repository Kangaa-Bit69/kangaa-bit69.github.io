//variables for user and computer choices
let playerChoice = '';
let comChoice = '';
//variables for scoreboard
let cWins = 0;
let pWins = 0;
let roundNum = 0;
//function that chooses one option at random for the computer
function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    if (randomNum === 1) {
        return('rock');
    } else if (randomNum === 2) {
        return('paper');
    } else {
        return('scissors');
    }
}
//prompts player for choice and returns it
//function promptPlayerChoice() {
//    return prompt('Rock, Paper or Scissors?');
//}
//function to compare choices and keep score
function playRound(playerChoice, comChoice) {
    
    console.log(playerChoice + comChoice)

    if (playerChoice === 'rock' && comChoice === 'paper' || playerChoice === 'paper' && comChoice === 'scissors' || playerChoice === 'scissors' && comChoice === 'rock') {
        cWins++ ;
        console.log(roundNum);
        score.textContent = `${pWins} to ${cWins}`;
        result.textContent =` HAHA! You lose!!! ${comChoice} beats ${playerChoice}`;
        gameWinner();

                      
        
    } else if (playerChoice === 'rock' && comChoice === 'scissors' || playerChoice === 'paper' && comChoice === 'rock' || playerChoice === 'scissors' && comChoice === 'paper') {
        pWins++ ;
        console.log(roundNum);
        score.textContent = `${pWins} to ${cWins}`;
        result.textContent =`you win this round.... ${playerChoice} beats ${comChoice}`;
        gameWinner();
        
        
    } else if (playerChoice === comChoice) {
        score.textContent = `${pWins} to ${cWins}`;
        result.textContent =`Tie! We both chose ${playerChoice}`;
        
    }
 } 
 //determine winner
 function gameWinner() {
    if (pWins === 5){ 
        result.textContent = `You win the game with a score of ${pWins} to ${cWins}`
     }  else if (cWins === 5) {
         result.textContent = `You lose the game with a score of ${pWins} to ${cWins}`
 }
 }
//display results in div
 const result = document.querySelector('.result');
 const body = document.querySelector('body');
 const score = document.createElement('score');
 score.classList.add('score');
 result.classList.add('result');
 body.appendChild(result);
 body.appendChild(score);
 
//create game() function to play x rounds and display results of each round and overall winner 

//  function game() {
//    for (let i = 0; i < 5){
//         console.log(playRound(promptPlayerChoice(), getComputerChoice()));
//     } if (cWins < pWins) {
//         return (`You win the game! with a score of ${pWins} to ${cWins}`)
//     } else if (pWins < cWins) {
//         return (`You lose the game! with a score of ${pWins} to ${cWins}`)
//     }
// } 
// call game() function and prompt user for number of rounds 
//console.log(game(prompt('How many rounds would you like to play?')))
 