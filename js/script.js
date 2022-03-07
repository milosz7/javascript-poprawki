function playGame(playerInput) {
  clearMessages();

  let moveRandomiser = Math.floor(Math.random() * 3 + 1);

  const computerMove = getMoveName(moveRandomiser);

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
}

document.getElementById('playRock').addEventListener('click', function () {
  playGame(1);
});
document.getElementById('playPaper').addEventListener('click', function () {
  playGame(2);
});
document.getElementById('playScissors').addEventListener('click', function () {
  playGame(3);
});
