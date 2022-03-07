function playGame(playerInput) {
  clearMessages();

  let moveRandomiser = Math.floor(Math.random() * 3 + 1);

  const computerMove = getMoveName(moveRandomiser);

  function getMoveName(moveId) {
    if (moveId === 1) {
      return 'rock';
    } else if (moveId === 2) {
      return 'paper';
    } else if (moveId === 3) {
      return 'scissors';
    }
  }

  let playerMove = getMoveName(playerInput);

  function displayResult(computerMove, playerMove) {
    printMessage('I played ' + computerMove + ', and you played ' + playerMove + '.');

    if (computerMove === playerMove) {
      printMessage("It's a draw!");
    } else if (
      (computerMove === 'rock' && playerMove === 'paper') ||
      (computerMove === 'scissors' && playerMove === 'rock') ||
      (computerMove === 'paper' && playerMove === 'scissors')
    ) {
      printMessage('You win!');
      playerScore++;
      score = computerScore + ' - ' + playerScore;
    } else {
      printMessage('You lose!');
      computerScore++;
      score = computerScore + ' - ' + playerScore;
    }
    document.getElementById('players').textContent = 'Console - Player';
    document.getElementById('result').textContent = score;
  }

  displayResult(computerMove, playerMove);
}

function resetGame() {
  document.getElementById('messages').innerHTML = '';
  document.getElementById('players').innerHTML = '';
  document.getElementById('result').innerHTML = '';
  computerScore = 0;
  playerScore = 0;
}

let playerScore = 0;

let computerScore = 0;

let score = computerScore + ' - ' + playerScore;

document.getElementById('playRock').addEventListener('click', function () {
  playGame(1);
  this.style.fontSize = '1.8rem';
  setTimeout(function () {
    playRock.style.fontSize = '2rem';
  }, 100);
});
document.getElementById('playPaper').addEventListener('click', function () {
  playGame(2);
  this.style.fontSize = '1.8rem';
  setTimeout(function () {
    playPaper.style.fontSize = '2rem';
  }, 100);
});
document.getElementById('playScissors').addEventListener('click', function () {
  playGame(3);
  this.style.fontSize = '1.8rem';
  setTimeout(function () {
    playScissors.style.fontSize = '2rem';
  }, 100);
});
document.getElementById('buttonReset').addEventListener('click', function () {
  resetGame();
  this.style.fontSize = '0.7rem';
  setTimeout(function () {
    buttonReset.style.fontSize = '0.8rem';
  }, 100);
});
