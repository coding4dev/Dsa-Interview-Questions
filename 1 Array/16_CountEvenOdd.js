// function countEvenOdd(arr) {
//   let even = 0,
//     odd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even++;
//     }
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] % 2 !== 0) {
//       odd++;
//     }
//   }
//   return { even, odd };
// }

// console.log(countEvenOdd([1, 2, 3, 4, 5, 6, 7]));

function countEvenOdd(arr) {
  let even = 0,
    odd = 0;
  for (const num of arr) {
    if (num % 2 == 0) {
      even++;
    } else if (num % 2 !== 0) {
      odd++;
    }
  }
  return { even, odd };
}

console.log(countEvenOdd([1, 2, 3, 4, 5, 6, 7]));
