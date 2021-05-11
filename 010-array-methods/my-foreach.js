// Implement the logic of "array.forEach()"

const myForEach = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    // Call the func for each element
    func(element, index, arr);
  }
};

const printElement = (el) => {
  console.log(el);
};

const numbers = [1, 2, 3, 4];
myForEach(numbers, printElement);
