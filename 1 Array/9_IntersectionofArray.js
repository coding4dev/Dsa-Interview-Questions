//Approach 1

// function intersectionofArray(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j] && !result.includes(arr1[i])) {
//         result.push(arr1[i]);
//       }
//     }
//   }
//   return result;
// }

// console.log(intersectionofArray([1, 2, 3, 4, 5], [, 3, 4, 5, 6]));

//Approach 2

// function intersectionofArray(arr1, arr2) {
//   let result = [];
//   let set1 = new Set(arr1);
//   for (num of arr2) {
//     if (set1.has(num)) {
//       result.push(num);
//       set1.delete(num);
//     }
//   }
//   return result;
// }

// console.log(intersectionofArray([1, 2, 3, 4, 5], [, 3, 4, 5, 6]));

//Approach 3

function intersectionofArray(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let i = 0,
    j = 0,
    result = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] == arr2[j]) {
      if (result[result.length - 1] != arr1[i]) {
        result.push(arr1[i]);
      }
      i++;
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return result;
}

console.log(intersectionofArray([1, 2, 3, 4, 5], [, 3, 4, 5, 6]));
