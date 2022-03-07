let moveRandomiser = Math.floor(Math.random() * 3 + 1);

const computerMove = getMoveName(moveRandomiser);

console.log(computerMove);

function getMoveName(moveId) {
  moveId = parseInt(moveId);
  if (moveId === 1) {
    return 'rock';
  } else if (moveId === 2) {
    return 'paper';
  } else if (moveId === 3) {
    return 'scissors';
  }
  printMessage(playerInput + ' is an unknown move ID.');
  return 'an unknown move';
}

let playerInput = prompt('Enter your move! 1: rock, 2: paper, 3: scissors.');

let playerMove = getMoveName(playerInput);

function displayResult(computerMove, playerMove) {
  printMessage('I played ' + computerMove + ', and you played ' + playerMove + '.');

  if (playerInput > 3) {
    printMessage('Enter a valid move.');
  } else if (computerMove === playerMove) {
    printMessage("It's a draw!");
  } else if (
    (computerMove === 'rock' && playerMove === 'paper') ||
    (computerMove === 'scissors' && playerMove === 'rock') ||
    (computerMove === 'paper' && playerMove === 'scissors')
  ) {
    printMessage('You win!');
  } else {
    printMessage('You lose!');
  }
}

displayResult(computerMove, playerMove);
