const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
  } else {
    console.log("Please choose rock, paper or scissors only")
  }
}

function getComputerChoice () {
  choice = Math.floor(Math.random() * 3)
  switch (choice) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break
    case 2:
      return 'scissors';
      break;    
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb'){
    return "You Win"
  }

  if (userChoice === computerChoice) {
    return "The game was tie"
  }

  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return "Computer Win";
    } else {
      return "You Win"
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors'){
      return "Computer Win";
    } else {
      return "You Win"
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return "Computer Win"
    } else {
      return "You Win"
    }
  }

}

function playGame(userChoice, computerChoice){
  userChoice = getUserChoice(userChoice);
  console.log(`You choose: ${userChoice}`);
  computerChoice = getComputerChoice();
  console.log(`Computer choose : ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame("paper");
