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
