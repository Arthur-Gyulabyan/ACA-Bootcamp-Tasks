// Verify if student programming labs work.

function gradeLabs(labs) {
    try {
        for (let i = 0; i < labs.length; i++) {
            let lab = labs[i];
            lab.runLab();
            let result = lab.runLab(4);
            console.log(`${lab.student} code worked: ${result === 256}`);
        }
    } catch (e) {
        console.log('Error thrown');
    }
}

let studentLabs2 = [
    {
        student: 'Jessica',
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: 'Mya',
        runLab: function (num) {
            return num * num;
        },
    },
    {
        student: 'Blake',
        myCode: function (num) {
            return Math.pow(num, num);
        },
    },
];

gradeLabs(studentLabs2);
