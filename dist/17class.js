"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.speak = function () {
        console.log("This is method normal");
    };
    Person.talkMethod = function () {
        console.log("This is method static");
    };
    Person.prototype.run = function () {
        console.log("Person running");
    };
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
// new object.
var objP1 = new Person("Mai Van Tu");
objP1.speak(); // Run 3
Person.talkMethod(); // Run 2
objP1.run(); // Run 1
// Result: Method run chay dau tien, den method statis and method normal, du o sau.
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name); //Cop Huynh
        return _this;
    }
    Employee.prototype.getNameEm = function () {
        return _super.prototype.getName.call(this);
    };
    return Employee;
}(Person));
// new object:
var objEm1 = new Employee("Cop Huynh");
console.log(objEm1.getNameEm()); // Cop Huynh
//# sourceMappingURL=17class.js.map