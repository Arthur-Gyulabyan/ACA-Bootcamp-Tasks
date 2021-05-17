// Find the student with the best average score.

// Using setter/getter
const scores = {
    John: [100, 90, 80],
    Bob: [100, 70, 80],
    Arthur: [40, 70, 20],
    Gor: [80, 100, 90],
};

const best = {
    _bestStudent: [],

    set getBestStudent(value) {
        let bestAverage = 0;
        let bestStudent = '';

        for (const key in value) {
            const average = value[key].reduce((acc, current, index, arr) => {
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

        best._bestStudent = [bestStudent, bestAverage];
    },

    get getBestStudent() {
        return best._bestStudent;
    },
};

best.getBestStudent = scores;
console.log(best.getBestStudent); // ["John", 90]
