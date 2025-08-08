// //Approach 1
// function threeSum(nums) {
//   const result = [];
//   const n = nums.length;
//   for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//       for (let k = j + 1; k < n; k++) {
//         if (nums[i] + nums[j] + nums[k] === 0) {
//           const triplets = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
//           const key = triplets.toString();
//           if (!result.some((r) => r.toString() === key)) {
//             result.push(triplets);
//           }
//         }
//       }
//     }
//   }
//   return result;
// }
// console.log(threeSum([-1, 0, 1, 2, -1, -4, 3]));

//Approach 2

function threeSum(nums) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
}
console.log(threeSum([-1, 2, 0, -4, 5, 8, 5, 6, 3]));
