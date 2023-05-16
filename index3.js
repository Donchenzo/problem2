
//3) With a for loop, create a JavaScript code that creates a new array in reverse order.


function reverseArray(arr) {
    const answer = [];
  
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      answer.unshift(element);
    }
  
    return answer;
  }
  
  function reverseArray2(arr) {
    const answer = [];
  
    for (let i = arr.length - 1; i >= 0; i--) {
      let element = arr[i];
      answer.push(element);
    }
  
    return answer;
  }
  
  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
  console.log(reverseArray([1, 3, 5, 7, 9, 11])); // [11, 9, 7, 5, 3, 1]
  console.log(reverseArray2([20, 50, 30, 60, 200])); // [200, 60, 30, 50, 20]
  console.log(reverseArray2([1, -1, 2, -3, 5, -8, 13])); // [13, -8, 5, -3, 2, -1, 1]