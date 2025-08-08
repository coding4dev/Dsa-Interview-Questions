//Approach 1

// function maximumOnes(nums) {
//   let maxCount = 0;
//   for (let i = 0; i < nums.length; i++) {
//     let count = 0;
//     for (let j = i; j < nums.length; j++) {
//       if (nums[j] === 1) {
//         count++;
//         maxCount = Math.max(maxCount, count);
//       } else {
//         break;
//       }
//     }
//   }
//   return maxCount;
// }
// console.log(maximumOnes([1, 1, 0, 1, 1, 1]));

//Approach 2

function maximumOnes(nums) {
  let maxCount = 0;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      maxCount = Math.max(maxCount, count);
    } else {
      count = 0;
    }
  }
  return maxCount;
}
console.log(maximumOnes([1, 1, 1, 1, , 0, 1, 1, 1]));
