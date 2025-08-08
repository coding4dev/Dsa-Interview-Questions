function findkSmallest(arr, k) {
  const sorted = [...arr].sort((a, b) => a - b);
  return sorted[k - 1];
}
console.log(findkSmallest([2, 1, 4, 3, 5, 6, 8, 7], 4));
