// Given a string s, find the longest palindromic substring in s.You may assume 
// that the maximum length of s is 1000.
// Example 1:
// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
//     Example 2:
// Input: "cbbd"
// Output: "bb"


function longestPalindrome(s) {
    function isPalindrome(string) {
        return string.split('').reverse().join('') === string;
    }

    longest = ''

    for (let i = 0; i < s.length - 1; i++) {
        for (let j = i + 1; j < s.length; j++) {
            let sub = s.slice(i, j);
            
            if (isPalindrome(sub) && longest.length < sub.length) {
                longest = sub;
            }
        }
    }

    return longest;
}

console.log(longestPalindrome('cbbd'));


// Write an efficient algorithm that searches for a value in an m x n matrix.
// This matrix has the following properties:
// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
//     Example 1:
// Input:
// matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:
// Input:
// matrix = [
//     [1, 3, 5, 7],
//     [10, 11, 16, 20],
//     [23, 30, 34, 50]
// ]
// target = 13
// Output: false

function binarySearch(matrix, target) {
    function flatten(arr) {
        let flat = [].concat.apply([], matrix);
        return flat;
    }

    let arr = flatten(matrix);
    let mid = arr.length / 2; 

    if (arr[mid] === target)
        return true;
    if (arr.length === 1 && arr[0] === target)
        return true;
    if (arr.length <= 2 && arr[mid] < target)
        return false;
    if (arr.length === 1 && arr[0] != target)
        return false;

    leftSide = arr.slice(0, mid);
    rightSide = arr.slice(mid, arr.length);

    if (target < arr[mid]) {
        binarySearch(leftSide, target);
    } else {
        binarySearch(rightSide, target);
    }
}

let matrix = [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50]
];

console.log(binarySearch(matrix, 3));


