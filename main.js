import knightsMoves from './knights';

console.log(knightsMoves([3, 3], [4, 3])); // [ 3, 3 ], [ 5, 4 ], [ 3, 5 ], [ 4, 3 ]
console.log(knightsMoves([0, 0], [0, 0])); // [ 0, 0 ]
console.log(knightsMoves([0, 0], [7, 7])); //  0, 0 ], [ 2, 1 ], [ 4, 2 ], [ 6, 3 ], [ 4, 4 ], [ 6, 5 ], [ 7, 7 ]
console.log(knightsMoves([8, 2], [3, 6])); // Error: Positions must be between 0 and 7 inclusive.
