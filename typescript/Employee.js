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
exports.__esModule = true;
var Person_1 = require("./Person");
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fname, lname, age, empID, salary) {
        if (salary === void 0) { salary = 6000; }
        var _this = _super.call(this, fname, lname, age) || this;
        _this.empID = empID;
        _this.salary = salary;
        Employee.count++;
        console.log(Employee.count);
        return _this;
    }
    Employee.count = 0;
    return Employee;
}(Person_1["default"]));
var emp = new Employee("Govindarajan", "Nedu", 40, 1001, 10000);
console.log(emp);
var emp2 = new Employee("Das", "Debashis", 40, 1001);
console.log(emp2);
