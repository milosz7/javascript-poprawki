let moveRandomiser = Math.floor(Math.random() * 3 + 1);

let computerMove = 'unknown';

if (moveRandomiser === 1) {
  computerMove = 'rock';
} else if (moveRandomiser === 2) {
  computerMove = 'paper';
} else {
  computerMove = 'scissors';
}

let playerMove = 'unknown';

let playerInput = prompt('Enter your move! 1: rock, 2: paper, 3: scissors.');

if (playerInput === '1') {
  playerMove = 'rock';
} else if (playerInput === '2') {
  playerMove = 'paper';
} else if (playerInput === '3') {
  playerMove = 'scissors';
}

printMessage('I played ' + computerMove + ', and you played ' + playerMove + '.');

if (computerMove === playerMove) {
  printMessage("It's a draw!");
} else if (computerMove === 'rock' && playerMove === 'scissors') {
  printMessage('You lose!');
} else if (computerMove === 'scissors' && playerMove === 'paper') {
  printMessage('You lose!');
} else if (computerMove === 'paper' && playerMove === 'rock') {
  printMessage('You lose!');
} else if (computerMove === 'scissors' && playerMove === 'rock') {
  printMessage('You win!');
} else if (computerMove === 'paper' && playerMove === 'scissors') {
  printMessage('You win!');
} else {
  printMessage('This is not a valid move!');
}
