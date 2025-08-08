//Approach 1

//left Rotation

// function RotateArray(arr, k) {
//   k = k % arr.length;
//   for(let i=0;i<k;i++){
//     arr.push(arr.shift());
//   }
//   return arr;
// }

// console.log(RotateArray([1,2,3,4,5,6],2));

//right Rotation

// function RotateArray(arr, k) {
//   k = k % arr.length;
//   for (let i = 0; i < k; i++) {
//     arr.unshift(arr.pop());
//   }
//   return arr;
// }

// console.log(RotateArray([1, 2, 3, 4, 5, 6], 2));

//Approach 2

//left rotation

// function RotateArray(arr, k) {
//   k = k % arr.length;
//   let sliced = arr.slice(k).concat(arr.slice(0, k));
//   return sliced;
// }

// console.log(RotateArray([1, 2, 3, 4, 5, 6], 2));

//right rotation

// function RotateArray(arr, k) {
//   k = k % arr.length;
//   let sliced = arr.slice(-k).concat(arr.slice(0, -k));
//   return sliced;
// }

// console.log(RotateArray([1, 2, 3, 4, 5, 6], 2));

//Approach 3

//left Rotate
// function RotateArray(arr, k) {
//   k = k % arr.length;
//   let spliced = arr.splice(0, k);
//   return arr.concat(spliced);
// }

// console.log(RotateArray([1, 2, 3, 4, 5, 6], 2));

//right rotate

// function RotateArray(arr, k) {
//   k = k % arr.length;
//   let spliced = arr.splice(-k);
//   return spliced.concat(arr);
// }

// console.log(RotateArray([1, 2, 3, 4, 5, 6], 2));

//Approach 4

//left rotation
// function reverse(arr, start, end) {
//   while (start < end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     start++;
//     end--;
//   }
// }

// function RotateArray(arr, k) {
//   k = k % arr.length;
//   reverse(arr, 0, k - 1);
//   reverse(arr, k, arr.length - 1);
//   reverse(arr, 0, arr.length - 1);

//   return arr;
// }

// console.log(RotateArray([1, 2, 3, 4, 5], 2));

//right rotation

function reverse(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

function RotateArray(arr, k) {
  k = k % arr.length;
  reverse(arr, arr.length - k, arr.length - 1);
  reverse(arr, 0, arr.length - k - 1);
  reverse(arr, 0, arr.length - 1);

  return arr;
}

console.log(RotateArray([1, 2, 3, 4, 5], 2));
