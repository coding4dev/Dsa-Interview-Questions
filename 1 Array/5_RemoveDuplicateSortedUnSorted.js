// ✅ Method 1: Two Pointer Approach (Efficient for Sorted Arrays Only)
function removeDuplicatesSorted(arr) {
  let i = 0; // Initialize the first pointer at index 0
  for (let j = 1; j < arr.length; j++) {
    // Start the second pointer from the second element
    if (arr[i] !== arr[j]) {
      i++; // Move the first pointer forward
      arr[i] = arr[j]; // Update element at the first pointer with current unique element
    }
  }
  return arr.slice(0, i + 1); // Return the array up to the last unique element
}
// Test
console.log(removeDuplicatesSorted([1, 2, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]

// ✅ Method 2: Using Set (Best for Unsorted Arrays)
function removeDuplicatesSet(arr) {
  return [...new Set(arr)]; // Converts array to Set (removing duplicates) and then back to array
}
// Test
console.log(removeDuplicatesSet([1, 2, 3, 3, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]

// ✅ Method 3: Using Array.filter() with indexOf
function removeDuplicatesFilterIndexOf(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
  // Keeps only the first occurrence of each item
}
// Test
console.log(removeDuplicatesFilterIndexOf([1, 1, 2, 2, 3, 3, 4, 5])); // Output: [1, 2, 3, 4, 5]

// ✅ Method 4: Using a Map/Object to Track Seen Items
function removeDuplicatesMap(arr) {
  const seen = {}; // Object to keep track of already seen items
  return arr.filter((item) => {
    if (seen[item]) return false; // If already seen, skip the item
    seen[item] = true; // Mark the item as seen
    return true; // Keep the item
  });
}
// Test
console.log(removeDuplicatesMap([1, 2, 2, 3, 1, 4])); // Output: [1, 2, 3, 4]

