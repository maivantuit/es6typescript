var employeeList:string[] =  ['Jame','Hani','Koke'];

let [e1,e2,e3] = employeeList;
console.log(e1);// Jame
console.log(e2);// Hani
console.log(e3);// Koke 

let [em1,em2] = employeeList;
console.log(em1);// Jame
console.log(em2);// Hani
// em3 is not defined.

let[...empList] = employeeList;
console.log(empList.toString());//Jame,Hani,Koke