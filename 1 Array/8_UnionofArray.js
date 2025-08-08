//Approach 1

// function unionArray(arr1, arr2) {
//   let combined = arr1.concat(arr2);
//   let result = [];
//   for (let i = 0; i < combined.length; i++) {
//     if (!result.includes(combined[i])) {
//       result.push(combined[i]);
//     }
//   }
//   return result;
// }

// console.log(unionArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//Aprroach 2

// function unionArray(arr1, arr2) {
//   return [...new Set([...arr1, ...arr2])];
// }

// console.log(unionArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

//Approach 3

function unionArray(arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0,
    j = 0,
    result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      if (result[result.length - 1] !== arr1[j]) result.push(arr2[j]);
      j++;
    } else {
      if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    if (result[result.length - 1] !== arr1[i]) result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    if (result[result.length - 1] !== arr2[j]) result.push(arr2[j]);
    j++;
  }
  return result;
}

console.log(unionArray([1, 2, 3, 4, 5], [4, 5, 6, 7, 8]));
