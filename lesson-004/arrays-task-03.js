// Calling in an array context

let arr = ['a', 'b'];

arr.push(function () {
  alert(this);
});

arr[2](); // Will print our array. The element with index 2 is a function which alerts "this". "this" in our case refers to the "arr".
