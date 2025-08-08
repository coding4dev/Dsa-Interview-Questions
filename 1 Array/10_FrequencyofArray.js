//Approach 1

// function frequencyofArray(arr) {
//   let freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (freq[arr[i]] !== undefined) continue;
//     let count = 0;
//     for (let j = 0;j< arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         count++;
//       }
//       freq[arr[i]] = count;
//     }
//   }
//   return freq;
// }

// console.log(frequencyofArray([1, 2, 3, 4, 5, 2, 4, 6]));

//Approach 2

// function frequencyofArray(arr) {
//   let freq = {};
//   for (let i = 0; i < arr.length; i++) {
//     freq[arr[i]] = (freq[arr[i]] || 0) + 1;
//   }
//   return freq;
// }

// console.log(frequencyofArray([1, 2, 3, 4, 5, 2, 4, 6]));

//Approach 3

function frequencyofArray(arr) {
  let freqMap = new Map();
  for (let num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  return freqMap;
}

console.log(frequencyofArray([1, 2, 3, 4, 5, 2, 4, 6]));
