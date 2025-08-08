function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minInx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minInx]) minInx = j;
    }
    if (minInx !== i) {
      [arr[i], arr[minInx]] = [arr[minInx], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([2, 5, 6, 1, 8, 9, 4]));
