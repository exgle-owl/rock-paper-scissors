const toCapitalCase = word => word.charAt(0).toUpperCase() + word.slice(1)

const getComputerChoice = () => {
  const choices = ['rock', 'paper', 'scissors']
  return choices[Math.floor(Math.random() * 3)]
}
