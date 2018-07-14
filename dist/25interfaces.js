"use strict";
function printPerson10(person) {
    person.name = "Cop Huynh"; // để check readonly.
    //person.salary=1000;//Cannot assign to 'salary' because it is a constant or a read-only property.
    console.log(person.name + " " + person.age + " " + person.salary);
}
var p10 = {
    name: "Mai Van Tu",
    age: 23,
    salary: 2000
};
var p12 = {
    name: "Mai Van Tu",
    salary: 2000
};
printPerson10(p10); // Mai Van Tu 23 2000
printPerson10(p12); // Mai Van Tu undefined 2000
//# sourceMappingURL=25interfaces.js.map