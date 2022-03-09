{
  let playerScore = 0;

  let computerScore = 0;

  let score = computerScore + ' - ' + playerScore;

  const playGame = function (playerInput) {
    clearMessages();

    const moveRandomiser = Math.floor(Math.random() * 3 + 1);

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

    const playerMove = getMoveName(playerInput);

    const displayResult = function (computerMove, playerMove) {
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
    };

    displayResult(computerMove, playerMove);
  };

  const resetGame = function () {
    document.getElementById('messages').textContent = '';
    document.getElementById('players').textContent = '';
    document.getElementById('result').textContent = '';
    computerScore = 0;
    playerScore = 0;
    score = computerScore + ' - ' + playerScore;
  };

  const buttonAnimation = function (button) {
    if (window.innerWidth > 450) {
      button.style.fontSize = '1.8rem';
      setTimeout(function () {
        button.style.fontSize = '2rem';
      }, 100);
    } else {
      button.style.fontSize = '1rem';
      setTimeout(function () {
        button.style.fontSize = '1.2rem';
      }, 100);
    }
  };

  document.getElementById('buttonReset').addEventListener('click', function () {
    resetGame();
    const button = this;
    button.style.fontSize = '0.7rem';
    setTimeout(function () {
      button.style.fontSize = '0.8rem';
    }, 100);
  });

  document.getElementById('playRock').addEventListener('click', function () {
    playGame(1);
    const button = this;
    buttonAnimation(button);
  });

  document.getElementById('playPaper').addEventListener('click', function () {
    playGame(2);
    const button = this;
    buttonAnimation(button);
  });

  document.getElementById('playScissors').addEventListener('click', function () {
    playGame(3);
    const button = this;
    buttonAnimation(button);
  });
}
