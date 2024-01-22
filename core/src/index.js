var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//console.log(direction1.up);
var direction2;
(function (direction2) {
    direction2["up"] = "up";
    direction2["down"] = "d";
    direction2["left"] = "l";
    direction2["right"] = "r";
})(direction2 || (direction2 = {}));
var user = {
    id: 1,
    name: 'John'
};
//console.log(user);
// Type Assertion
var cid = 1;
// 1 - Method1
var cId = cid;
// 2 - Method2
var ciD = cid;
// Functions
function addNum(a, b) {
    return a + b;
}
console.log(addNum(1, 2));
function msg(message) {
    console.log(message);
}
msg('hello');
var user1 = {
    id: 1,
    name: 'John'
};
var p1 = 1;
var add = function (x, y) { return x + y; };
var sub = function (x, y) { return x - y; };
console.log(add(2, 3));
console.log(sub(3, 2));
// Classes
var Person = /** @class */ (function () {
    function Person(id, name) {
        this.id = id;
        this.name = name;
    }
    Person.prototype.register = function () {
        return "".concat(this.name, " is now registered!");
    };
    return Person;
}());
var mike = new Person(1, 'mike jordan');
//console.log(mike.id); // Property 'id' is private and only accessible within class 'Person'.
//console.log(mike.name); // Property 'name' is protected and only accessible within class 'Person' and its subclasses.
// Subclasses
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(id, name, title) {
        var _this = _super.call(this, id, name) || this;
        _this.title = title;
        return _this;
    }
    return Employee;
}(Person));
var emp = new Employee(3, 'Shawn', 'Developer');
console.log(emp.register());
