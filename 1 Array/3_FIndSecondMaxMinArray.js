const arr = [5, 1, 9, 2, 5, 1];

// =======================================
// 1. Using Inbuilt Functions (Math.max & Math.min)
// =======================================

/*
This method removes duplicates using Set,
finds the max and min using Math.max and Math.min,
then removes them and finds the next max and min.
*/

function secondLargestSmallestUsingMath(arr) {
  const unique = [...new Set(arr)];

  if (unique.length < 2) return null;

  const max = Math.max(...unique);
  const min = Math.min(...unique);

  // Remove max and min from array
  unique.splice(unique.indexOf(min), 1);
  unique.splice(unique.indexOf(max), 1);

  const secondMax = Math.max(...unique);
  const secondMin = Math.min(...unique);

  return { secondSmallest: secondMin, secondLargest: secondMax };
}

console.log("Using Math.max/min:", secondLargestSmallestUsingMath(arr));


// =======================================
// 2. Using Sorting
// =======================================

/*
This method removes duplicates using Set,
then sorts the array in ascending order.
- The second element becomes the second smallest
- The second last element becomes the second largest
*/

function secondLargestSmallestUsingSort(arr) {
  const unique = [...new Set(arr)].sort((a, b) => a - b);

  if (unique.length < 2) return null;

  const secondSmallest = unique[1];
  const secondLargest = unique[unique.length - 2];

  return { secondSmallest, secondLargest };
}

console.log("Using Sorting:", secondLargestSmallestUsingSort(arr));


// =======================================
// 3. Optimized - Single Pass Linear Approach
// =======================================

/*
This approach finds second smallest and second largest in a single loop.
- Time Complexity: O(n)
- Space Complexity: O(1)
- No sorting or extra memory used (except constants)
*/

function secondLargestSmallestLinear(arr) {
  let max = -Infinity, secondMax = -Infinity;
  let min = Infinity, secondMin = Infinity;

  for (let num of arr) {
    // Update max and second max
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax && num !== max) {
      secondMax = num;
    }

    // Update min and second min
    if (num < min) {
      secondMin = min;
      min = num;
    } else if (num < secondMin && num !== min) {
      secondMin = num;
    }
  }

  if (secondMax === -Infinity || secondMin === Infinity) return null;

  return { secondSmallest: secondMin, secondLargest: secondMax };
}

console.log("Using Linear Approach:", secondLargestSmallestLinear(arr));
