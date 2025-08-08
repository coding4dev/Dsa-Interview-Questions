function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}
function merge(left, right) {
  let result = [],
    i = 0;
  j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[i]) result.push(left[i++]);
    else result.push(right[j++]);
  }
  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([2, 1, 4, 3, 6, 5, 8, 7]));
