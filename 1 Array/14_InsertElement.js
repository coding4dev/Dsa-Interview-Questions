// function insertElement(arr, position, element) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i < position) {
//       newArr[i] = arr[i];
//     } else if (i == position) {
//       newArr[i] = element;
//     } else {
//       newArr[i] = arr[i - 1];
//     }
//   }
//   return newArr;
// }

// console.log(insertElement([10,20,30,40,50],2,25));

function insertElement(arr, position, element) {
  arr.splice(position, 0, element);
  return arr;
}
console.log(insertElement([10, 20, 30, 40, 50], 2, 25));
