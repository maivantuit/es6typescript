let employeeObj = {
    firtname:"Jame",
    lastname:"Rodigez",
    age:23
}

console.log(employeeObj.firtname);// Jame
console.log(employeeObj.lastname);// Rodigez
console.log(employeeObj.age);// 23

let{firtname,lastname,age} = employeeObj;
console.log(firtname);// Jame
console.log(lastname);// Rodigez
console.log(age);// 23

let{firtname:f, lastname:l,age:e} = employeeObj;
console.log(f);// Jame
console.log(l);// Rodigez
console.log(e);// 23

