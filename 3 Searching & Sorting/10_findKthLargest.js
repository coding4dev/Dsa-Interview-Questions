function findkthLargestt(arr, k) {
  const sorted = [...arr].sort((a, b) => b - a);
  return sorted[k - 1];
}
console.log(findkthLargestt([2, 1, 4, 3, 5, 6, 8, 7], 4));
