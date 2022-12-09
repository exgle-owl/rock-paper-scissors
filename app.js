const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')

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

  console.log(`Player: ${playerSelection}`)
  console.log(`Computer: ${computerSelection}`)

  if (playerSelection === computerSelection) {
    return
  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'rock')) {
    playerScore++
    if (playerScore >= 5) {
      console.log('You Won')
    }
  } else {
    computerScore++
    if (computerScore >= 5) {
      console.log('You Lose')
    }
  }
}

const main = () => {
  rockBtn.addEventListener('click', e => playRound(e))
  paperBtn.addEventListener('click', e => playRound(e))
  scissorsBtn.addEventListener('click', e => playRound(e))
}

main()
