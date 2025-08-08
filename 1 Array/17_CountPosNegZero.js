//Approach 1

// function CountPosNegZero(arr) {
//   let pos = 0;
//   neg = 0;
//   zero = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       pos++;
//     }
//   }
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] < 0) {
//       neg++;
//     }
//   }
//   for (let k = 0; k < arr.length; k++) {
//     if (arr[k] == 0) {
//       zero++;
//     }
//   }
//   return { pos, neg, zero };
// }

// console.log(CountPosNegZero([1, 2, 3, 0, -1, -2, , -3, 5, 0, -5]));

//Approach 2

function countPosNegZero(arr) {
  let pos = 0,
    neg = 0,
    zero = 0;
  for (const num of arr) {
    if (num > 0) {
      pos++;
    } else if (num < 0) {
      neg++;
    } else {
      zero++;
    }
  }
  return { pos, neg, zero };
}

console.log(countPosNegZero([1, 2, 4, -5, -6, 3, 6, 0, -6, 0]));
