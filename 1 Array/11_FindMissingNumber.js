//Approach 1
// function missingNumber(arr) {
//   for (let i = 1; i <= arr.length; i++) {
//     if (!arr.includes(i)) {
//       return i;
//     }
//   }
// }

// console.log(missingNumber([1, 2, 3, 5, 6]));

//Approach 2

// function missingNumber(arr) {
//   let n = arr.length + 1;
//   const totalSum = (n * (n + 1)) / 2;
//   const sum = arr.reduce((acc, val) => acc + val, 0);
//   const result = totalSum - sum;
//   return result;
// }

// console.log(missingNumber([1, 2, 3, 5, 6]));
