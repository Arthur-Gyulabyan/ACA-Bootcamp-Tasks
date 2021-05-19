// Convert the following code using try...catch.

// function reverseString(s) {
//     typeof s !== "string"
//         ? console.log("s.split is not a function")
//         : (s = s.split("").reverse().join(""));
//     console.log(s);
// }

function reverseString(s) {
    try {
        s = s.split('').reverse().join('');
    } catch (error) {
        console.log(error.message);
    }

    console.log(s);
}

reverseString('123'); // "321"
