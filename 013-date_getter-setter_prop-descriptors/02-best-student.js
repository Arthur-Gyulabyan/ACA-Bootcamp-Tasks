// Find the student with the best average score.

const getBestStudent = (data) => {
    let bestStudent;
    let bestAverage = 0;

    for (const key in data) {
        const average = data[key].reduce((acc, current, index, arr) => {
            if (index === arr.length - 1) {
                acc += current;
                return acc / arr.length;
            }

            return acc + current;
        });

        if (average > bestAverage) {
            bestAverage = average;
            bestStudent = key;
        }
    }

    return bestStudent;
};

const scores = {
    John: [100, 90, 80],
    Bob: [100, 70, 80],
    Arthur: [40, 70, 20],
    Gor: [100, 100, 90],
};

console.log(getBestStudent(scores)); // "Gor"
