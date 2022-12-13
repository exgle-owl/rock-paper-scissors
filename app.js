const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const playerScoreSpan = document.querySelector('#player-score')
const computerScoreSpan = document.querySelector('#computer-score')
const gameLogSpan = document.querySelector('#game-log')
const btnsSection = document.querySelector('#btns')

let playerScore = 0
let computerScore = 0

const toCapitalCase = word => word.charAt(0).toUpperCase() + word.slice(1)

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}

const playRound = e => {
  playerSelection = e.target.id
  const computerSelection = getComputerChoice()

  if (playerSelection === computerSelection) {
    gameLogSpan.textContent = `Tie!`
    return
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
    playerScore++
    gameLogSpan.textContent = `You won! ${toCapitalCase(playerSelection)} beats ${toCapitalCase(computerSelection)}`
    playerScoreSpan.textContent = `Player: ${playerScore}`
    if (playerScore >= 5) {
      console.log('You Won')
      gameLogSpan.textContent = 'You won the game!'
      btnsSection.innerHTML = `
        <button id="play-again">Play Again!</button>
      `
      const playAgainBtn = document.querySelector('#play-again')
      playAgainBtn.addEventListener('click', () => location.reload())
    }
  } else {
    computerScore++
    gameLogSpan.textContent = `You lose! ${toCapitalCase(computerSelection)} beats ${toCapitalCase(playerSelection)}`
    computerScoreSpan.textContent = `Computer: ${computerScore}`
    if (computerScore >= 5) {
      console.log('You Lose')
      gameLogSpan.textContent = 'You lose the game!'
      btnsSection.innerHTML = `
        <button id="play-again">Play Again!</button>
      `
      playAgainBtn.addEventListener('click', () => location.reload())
    }
  }
}

const main = () => {
  rockBtn.addEventListener('click', e => playRound(e))
  paperBtn.addEventListener('click', e => playRound(e))
  scissorsBtn.addEventListener('click', e => playRound(e))
}

main()
