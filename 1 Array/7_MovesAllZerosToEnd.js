//Approach 1

// function movesZerotoEnd(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//       result.push(arr[i]);
//     }
//   }
//   while (result.length < arr.length) {
//     result.push(0);
//   }
//   return result;
// }
// console.log(movesZerotoEnd([1, 2, 0, 3, 0, 4, 0, 6]));

//Approach 2

// function movesZerotoEnd(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != 0) {
//       arr[count++] = arr[i];
//     }
//   }
//   while (count < arr.length) {
//     arr[count++] = 0;
//   }
//   return arr;
// }
// console.log(movesZerotoEnd([1, 2, 0, 3, 0, 4, 0, 6]));

//Approach 3

function movesZerotoEnd(arr) {
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      index++;
    }
  }
  return arr;
}
console.log(movesZerotoEnd([1, 2, 0, 3, 0, 4, 0, 6]));
