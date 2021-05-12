// Implement the logic of "array.forEach()"

const myForEach = (arr, func) => {
  for (let index in arr) {
    // Empty indexes will be skipped
    const element = arr[index];

    // Call the func for each element
    func(element, index, arr);
  }
};

const printElement = (el) => {
  console.log(el);
};

const numbers = [1, 2, 3, 4];
const anotherNumbers = [1, 2, , 4];

myForEach(numbers, printElement); // 1, 2, 3, 4
myForEach(anotherNumbers, printElement); // 1, 2, 4
