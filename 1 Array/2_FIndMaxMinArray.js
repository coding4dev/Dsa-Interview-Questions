// =======================================
// 1. Using Inbuilt Functions (Math.max & Math.min)
// =======================================

/*
This method spreads the array into individual elements using the spread operator (...) 
and uses Math.max and Math.min to find the maximum and minimum values.
*/

const arr1 = [3, 5, 1, 8, -2, 0];

function findMaxMinUsingMath(arr) {
  // Handle empty array case
  if (arr.length === 0) return null;

  // Use Math.max and Math.min with spread operator
  const max = Math.max(...arr);
  const min = Math.min(...arr);

  return { max, min };
}

console.log("Using Math.max/min:", findMaxMinUsingMath(arr1));



// =======================================
// 2. Using Sorting
// =======================================

/*
This method sorts the array in ascending order using the `sort()` method.
After sorting:
- The first element will be the minimum
- The last element will be the maximum
*/

const arr2 = [3, 5, 1, 8, -2, 0];

function findMaxMinUsingSort(arr) {
  if (arr.length === 0) return null;

  // Clone the array to avoid modifying the original
  const sortedArr = [...arr];

  // Sort in ascending order
  sortedArr.sort((a, b) => a - b);

  // Return min (first element) and max (last element)
  return { max: sortedArr[sortedArr.length - 1], min: sortedArr[0] };
}

console.log("Using Sorting:", findMaxMinUsingSort(arr2));



// =======================================
// 3. Optimized - Single Pass Linear Approach
// =======================================

/*
This approach iterates through the array once, updating max and min as it goes.
- Time Complexity: O(n)
- Space Complexity: O(1)
This is the most efficient way to find max/min in terms of performance.
*/

const arr3 = [3, 5, 1, 8, -2, 0];

function findMaxMinLinear(arr) {
  if (arr.length === 0) return null;

  // Initialize max and min with the first element
  let max = arr[0];
  let min = arr[0];

  // Traverse the array and update max/min as needed
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
    if (arr[i] < min) min = arr[i];
  }

  return { max, min };
}

console.log("Using Linear Approach:", findMaxMinLinear(arr3));
