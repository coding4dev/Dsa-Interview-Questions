//Approach 1
// function sumall(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }
// console.log(sumall([1, 2, 3, 4, 5]));

//Approach 2
function sumAll(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
console.log(sumAll([1, 2, 3, 4, 5]));
