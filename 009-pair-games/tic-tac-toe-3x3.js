// Get random coordinates
function generatePos() {
  let posX = Math.floor(Math.random() * 3);
  let posY = Math.floor(Math.random() * 3);

  return [posX, posY];
}

// Check diagonals, rows and columns
function checkResult(desk) {
  if (desk[0][0] === desk[1][1] && desk[0][0] === desk[2][2] && desk[0][0] !== undefined) {
    return true;
  }

  if (desk[0][2] === desk[1][1] && desk[0][2] === desk[2][0] && desk[0][2] !== undefined) {
    return true;
  }

  for (let i = 0; i < desk.length; i++) {
    if (desk[i][0] === desk[i][1] && desk[i][0] === desk[i][2] && desk[i][0] !== undefined) {
      return true;
    }

    if (desk[0][i] === desk[1][i] && desk[0][i] === desk[2][i] && desk[0][i] !== undefined) {
      return true;
    }
  }

  return false;
}

function runTicTacToe() {
  // Create 3x3 desk
  let desk = [[], [], []];

  let activePlayer = 'X';

  for (let i = 0; i < 9; i++) {
    // Get coordinate
    let randomArr = generatePos();
    if (desk[randomArr[0]][randomArr[1]] === undefined) {
      // If point is empty
      desk[randomArr[0]][randomArr[1]] = activePlayer;

      // Check for winner
      if (checkResult(desk)) {
        console.log(desk);
        return `Player ${activePlayer} win!`;
      } else if (i === 8) {
        // If on last step the winner is not found -> draw
        console.log(desk);
        return 'Draw!';
      }

      // Change active player
      if (activePlayer === 'X') {
        activePlayer = 'O';
      } else {
        activePlayer = 'X';
      }
    } else {
      // If the current cell is busy, repeat the iteration
      i--;
    }
  }
}

console.log(runTicTacToe());
