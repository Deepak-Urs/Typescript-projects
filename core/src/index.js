var id = 5;
var company = 'Google';
var isPublished = true;
var x = 'hello';
// isPublished = 1 --> error
// x = true --> no error
// arrays
var ids = [1, 2, 3, 4, 5];
var arr = [1, true, 'hi'];
//Tuples
var person = [1, 'abcd', true];
// Tuple arrays
var employee = [
    [1, 'a'], [2, 'b'], [3, 'c'], [4, 'd']
];
// unions
var pid;
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
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "d";
    direction2["left"] = "l";
    direction2["right"] = "r";
})(direction2 || (direction2 = {}));
console.log(direction2);
