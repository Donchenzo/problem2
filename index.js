// 2).Create a JavaScript code that accepts an array of numbers and returns a new array with only the odd numbers from the original array. If there is only one odd number in the array, return an array with that single value.


function onlyOdds(arr) {
    const oddNumbers = [];
  
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
  
      if (element % 2 === 1) {
        oddNumbers.push(element);
      }
    }
  
    return oddNumbers;
  }
  
  console.log(onlyOdds([2, 4, 6, 8, 11, 20, 15, 22])); // [ 11, 15]
  console.log(onlyOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
  console.log(onlyOdds([70, 42, 55, 81, 21, 91, 34])); // [55, 81, 21, 91]
  console.log(onlyOdds([2, 4, 6, 8, 10, 11, 12])); // [11]