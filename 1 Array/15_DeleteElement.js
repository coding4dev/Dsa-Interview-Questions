// function deleteArray(arr, position) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== position) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(deleteArray([10, 20, 30, 40, 50], 2));

function deleteArray(arr, position) {
  arr.splice(position, 1);
  return arr;
}

console.log(deleteArray([10, 20, 30, 40, 50], 2));
