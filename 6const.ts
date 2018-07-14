// Const:
// 1. Not support hoisting.
// 2. Read only variable.
// 3. Khi khởi tạo phải gán giá trị.
// 4. 
let number;
const NUMBERCONS=12;

//NUMBERCONS 13;// not gán giá trị được.

const obj = {
    name:"Mai Van Tu"
}
console.log(obj.name);