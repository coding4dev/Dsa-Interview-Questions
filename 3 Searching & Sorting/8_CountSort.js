function countSort(arr) {
  if (arr.length === 0) return [];
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);

  for (let num of arr) count[num]++;

  const sorted = [];
  for (let i = 0; i < count.length; i++) {
    while (count[i]-- > 0) sorted.push(i);
  }
  return sorted;
}

console.log(countSort([2, 1, 4, 3, 5, 7, 6]));
