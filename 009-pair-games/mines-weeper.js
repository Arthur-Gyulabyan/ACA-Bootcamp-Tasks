// Get coordinates, where the mines will be placed
function generatePos(size) {
  let coordinates = [];

  for (let i = 0; i <= size / 2; i++) {
    let posX = Math.floor(Math.random() * size);
    let posY = Math.floor(Math.random() * size);

    coordinates.push([posX, posY]);
  }

  return coordinates;
}

function calcAttachedPoints(coordinate, field) {
  let x = coordinate[0];
  let y = coordinate[1];

  // Coordinates of attached points of mine.
  const attachedPoints = [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];

  // Loop through the attached points of mine and calculate their value
  attachedPoints.forEach((el) => {
    if (field[el[0]] !== undefined) {
      let point = field[el[0]][el[1]]; // Current point

      if (
        typeof point === 'number' &&
        el[0] >= 0 &&
        el[0] < field.length &&
        el[1] >= 0 &&
        el[1] < field.length
      ) {
        // If current point is not a mine and it is located inside the field
        field[el[0]][el[1]]++;
      }
    }
  });
}

function drawMineField(coordinates, field) {
  // Fill the field with zeroes.
  for (let i = 0; i < field.length; i++) {
    field[i].fill(0);
  }

  // Place the mine and update its neighbour points
  for (let i = 0; i < coordinates.length; i++) {
    let x = coordinates[i][0];
    let y = coordinates[i][1];

    if (typeof field[x][y] === 'number') {
      field[x][y] = 'm';
      calcAttachedPoints([x, y], field);
    }
  }
}

// Request the user for coordinate to be opened
function openPoint() {
  const x = +prompt('Insert the first coordinate');
  const y = +prompt('Insert the second coordinate');

  return [x, y];
}

// Check the opened point
function checkForMine(coordinate, field) {
  let x = coordinate[0];
  let y = coordinate[1];

  return field[x][y] === 'm';
}

function runMinesWeeper(size) {
  const field = [];
  let gameEnded = false;

  for (let i = 0; i < size; i++) {
    field.push([]);
    field[i].length = size;
  }

  let coordinates = generatePos(size);
  drawMineField(coordinates, field);
  console.log(field);

  while (gameEnded === false) {
    const openedPoint = openPoint();
    const isMine = checkForMine(openedPoint, field);

    if (isMine) {
      console.log('Boooooom!');
      break;
    } else {
      console.log('You are lucky!');
      field[openedPoint[0]][openedPoint[1]] = 'opened';
    }
  }
}

runMinesWeeper(10);
