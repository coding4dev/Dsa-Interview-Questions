// =============================
// 1. Inbuilt Function Approach
// =============================

// Initialize an array
let arr1 = [1, 2, 3, 4, 5];

// Use JavaScript's built-in reverse() method which reverses the array in-place
arr1.reverse();

// Print the reversed array
console.log("Inbuilt Function Approach:", arr1);



// =============================
// 2. Brute Force Approach
// =============================

/*
This approach creates a new array and fills it by iterating 
over the original array from end to start.
*/

let arr2 = [1, 2, 3, 4, 5]; // Original array
let rev = []; // Empty array to store reversed elements

function reverseArrayBruteForce(arr) {
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
        // Assign element from the end of original array to the new array
        rev[i] = arr[arr.length - 1 - i];
    }
    return rev;
}

console.log("Brute Force Approach:", reverseArrayBruteForce(arr2));



// =============================
// 3. Optimized - Two Pointer Approach
// =============================

/*
This approach swaps elements from both ends of the array using
two pointers (left and right), working toward the center.
This is done in-place and uses O(1) extra space.
*/

let arr3 = [1, 2, 3, 4, 5]; // Original array

function reverseArrayTwoPointer(arr) {
    let left = 0; // Start pointer
    let right = arr.length - 1; // End pointer

    // Continue swapping until both pointers meet in the middle
    while (left < right) {
        // Swap elements at left and right indices
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        // Move both pointers toward the center
        left++;
        right--;
    }

    return arr; // Return the reversed array
}

console.log("Two Pointer Approach:", reverseArrayTwoPointer(arr3));
