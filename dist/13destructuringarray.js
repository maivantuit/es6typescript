"use strict";
var employeeList = ['Jame', 'Hani', 'Koke'];
var e1 = employeeList[0], e2 = employeeList[1], e3 = employeeList[2];
console.log(e1); // Jame
console.log(e2); // Hani
console.log(e3); // Koke 
var em1 = employeeList[0], em2 = employeeList[1];
console.log(em1); // Jame
console.log(em2); // Hani
// em3 is not defined.
var empList = employeeList.slice(0);
console.log(empList.toString()); //Jame,Hani,Koke
//# sourceMappingURL=13destructuringarray.js.map