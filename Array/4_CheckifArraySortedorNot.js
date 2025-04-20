// =======================================
// Function to Check if the Array is Sorted
// =======================================

/*
This function checks if the given array is sorted in ascending or descending order.
It first checks the ascending order, then the descending order.
- If the array is neither ascending nor descending, it returns "Not Sorted".
*/

function isSorted(arr) {
    const asc = arr.every((val, i) => i === 0 || arr[i - i] <= val);  // Check if the array is in ascending order
    const desc = arr.every((val, i) => i === 0 || arr[i - 1] >= val);  // Check if the array is in descending order
  
    if (asc) return "Sorted is Ascending Order";  // Return if the array is sorted in ascending order
    if (desc) return "Sorted in Descending Order";  // Return if the array is sorted in descending order
    return "Not Sorted";  // Return if the array is not sorted
  }
  
  // Test Case 1
  console.log(isSorted([1, 2, 3, 4, 5]));
  
  // Test Case 2
  console.log(isSorted([5, 4, 3, 2, 1]));
  
  // Test Case 3
  console.log(isSorted([5, 4, 1, 2, 3]));
  
  // =======================================
  // Optimized Function to Check if the Array is Sorted
  // =======================================
  
  /*
  This function checks whether the array is sorted in ascending or descending order
  using a loop. It sets two flags (`asc` and `desc`) to `true` and then iterates
  through the array to check for sorting order.
  */
  
  function isSorted(arr) {
      let asc = true;
      let desc = true;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) asc = false;  // If the current element is smaller than the previous, it's not ascending
        if (arr[i] > arr[i - 1]) desc = false;  // If the current element is larger than the previous, it's not descending
      }
      if (asc) return "Sorted in Ascending Order";  // Return if the array is sorted in ascending order
      if (desc) return "Sorted in Descending Order";  // Return if the array is sorted in descending order
      return "Not Sorted";  // Return if the array is not sorted
  }
  
  // Test Case 1
  console.log(isSorted([1, 2, 3, 4, 5]));
  
  // Test Case 2
  console.log(isSorted([5, 4, 3, 2, 1]));
  
  // Test Case 3
  console.log(isSorted([5, 4, , 2, 3, 1]));
  
  // =======================================
  // Final Optimized Function to Check if the Array is Sorted
  // =======================================
  
  /*
  This function checks whether the array is sorted in ascending or descending order.
  The flags `asc` and `desc` are updated as the array is traversed.
  - If both flags are `false`, it returns "Not Sorted".
  - If only one flag is `true`, it returns the corresponding sorted order.
  */
  
  function isSorted(arr) {
      let asc = true;
      let desc = true;
  
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) desc = false;  // If the current element is larger than the previous, it's not descending
        else if (arr[i] < arr[i-1]) asc = false;  // If the current element is smaller than the previous, it's not ascending
      }
  
      if (!asc && !desc) return "Not Sorted";  // Return if the array is neither ascending nor descending
  
      return asc ? "Sorted in Ascending Order " : "Sorted in Descending Order";  // Return based on which flag is true
  }
  
  // Test Case 1
  console.log(isSorted([1, 2, 3, 4, 5]));
  
  // Test Case 2
  console.log(isSorted([5, 4, 3, 2, 1]));
  
  // Test Case 3
  console.log(isSorted([5, 4, , 2, 3, 1]));
  