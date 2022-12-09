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
    return `You lose! ${toCapitalCase(playerSelection)} beated by ${toCapitalCase(computerSelection)} `
  }
}

const main = () => {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt('Rock, paper or scissors?')
    const computerSelection = getComputerChoice()

    console.log(playRound(playerSelection, computerSelection))
  }
}

main()
