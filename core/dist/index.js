"use strict";
let id = 5;
let company = 'Google';
let isPublished = true;
let x = 'hello';
// isPublished = 1 --> error
// x = true --> no error
// arrays
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hi'];
//Tuples
let person = [1, 'abcd', true];
// Tuple arrays
let employee = [
    [1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']
];
// unions
let pid;
pid = 22;
pid = '22';
// enums
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 0] = "up";
    direction1[direction1["down"] = 1] = "down";
    direction1[direction1["left"] = 2] = "left";
    direction1[direction1["right"] = 3] = "right";
})(direction1 || (direction1 = {}));
console.log(direction1.up);
