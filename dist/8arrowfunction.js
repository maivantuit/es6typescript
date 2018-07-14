"use strict";
// Fucntion thuần:
var calculateSalary = function () {
    return 100000;
};
console.log(calculateSalary().toString()); //100000
// Function Arrow, same lamda:
var calculateSalary2 = function () { return 100000; };
console.log(calculateSalary2()); //100000
// =>: đại điện cho return.
// Xóa bỏ chữ function.
// thêm parameter.
var calculateSalary3 = function (bunus, tax) { return bunus + 10000 - tax; };
console.log(calculateSalary3(10000, 1)); //19999
// In java 8.
// C# 6.
//# sourceMappingURL=8arrowfunction.js.map