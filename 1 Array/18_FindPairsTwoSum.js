// function findPairs(arr, target) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }
//   return result;
// }

// console.log(findPairs([1, 2, 4, 3, 5, 1, 7], 8));

function findPairs(arr, target) {
  let freq = new Map();
  let result = [];
  for (let num of arr) {
    let complement = target - num;
    for (let i = 0; i < freq.get(complement); i++) {
      if (freq.has(complement)) {
        result.push([complement, num]);
      }
    }
    freq.set(num, (freq.get(num) || 0) + 1);
  }
  return result;
}

console.log(findPairs([1, 2, 4, 2, 6, 7, 4], 9));
