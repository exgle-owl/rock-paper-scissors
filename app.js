const toCapitalCase = word => word.charAt(0).toUpperCase() + word.slice(1)

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return 'Tie'
  } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    return 'You won! Rock beat Scissors'
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return 'You won! Scissors beat Paper'
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return 'You won! Paper beat Rock'
  } else {
    return `You lose! ${toCapitalCase(computerSelection)} beat ${toCapitalCase(playerSelection)}`
  }
}
