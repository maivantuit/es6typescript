// Run: npm start.
// Run: lite-server.

let arr1 : string[] = ["a","b","c"];
let arr2 : number[] = [1,2,3];
let arr3 : any[] = [1,"b",2];

console.log(arr3[1]);// b

let arr4: Array<string> =['a','b','c'];
console.log(arr4[1]);// b

let student : [string, number];
student =['Tu',23];
console.log(student[0]);// Tu
console.log(student[1]);// 23
student[2] = "Cop";
console.log(student[2]);// Cop
student[3] = 24;
console.log(student[3]);// 24
// Tạo ngoài 2 kiểu dữ liệu đó là báo lổi.