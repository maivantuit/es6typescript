// Khai báo interface như là khai báo 1 hợp đồng, để các class implements đều phải có các thuộc tính, method trong interface.s
interface Person10{
    name:string,
    age?:number,// Cho phép null.Optional Properties.
    readonly salary:number // không cho phép chỉnh sửa.
}
function printPerson10(person:Person10){
    person.name= "Cop Huynh"; // để check readonly.
    //person.salary=1000;//Cannot assign to 'salary' because it is a constant or a read-only property.
    console.log(person.name+" "+person.age+" "+person.salary);
}
var p10:Person10 ={
    name:"Mai Van Tu",
    age:23,
    salary:2000
}
var p12:Person10 ={
    name:"Mai Van Tu",
    salary:2000
}
printPerson10(p10);// Mai Van Tu 23 2000
printPerson10(p12);// Mai Van Tu undefined 2000