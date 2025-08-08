//Approach 1

// function search(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(search([1, 2, 3, 4, 5], 4));

//Approach 2

function search(arr, x) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = i;
  }
  return map.hasOwnProperty(x) ? map[x] : -1;
}16

console.log(search([1, 2, 3, 4, 5], 4));
