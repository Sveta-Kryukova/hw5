# Advanced Array Operations
This repository contains implementations of various advanced array operations in JavaScript. Each task focuses on specific array manipulation techniques and optimizations for performance and efficiency.

## Custom Filter Unique
The customFilterUnique function takes an array and a callback function as arguments. It filters the array based on the uniqueness determined by the callback's logic, returning an array with only unique elements.

## Array Chunking
The chunkArray function takes an array and a chunk size as arguments. It divides the array into smaller arrays, each containing elements of the specified chunk size, and returns an array of arrays.

## Array Shuffling
The customShuffle function takes an array as an argument and returns a new array with its elements randomly shuffled.

## Array Intersection and Union
The getArrayIntersection function takes two arrays as arguments and returns a new array containing the common elements between the two arrays.

The getArrayUnion function takes two arrays as arguments and returns a new array containing all unique elements from both arrays without any duplicates.

## Array Performance Analysis
The measureArrayPerformance function takes a function and an array as arguments. It executes the provided function with the given array as input and measures the execution time.

We use the measureArrayPerformance function to compare the performance of built-in array methods (e.g., map, filter, reduce, etc.) against our custom array manipulation functions.
