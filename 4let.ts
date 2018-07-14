/// Let
// 1. Block scope.
// 2. Cannot re-assign.
// 3. Not support hoisting.

// Case 1:
function greetPerson5(name:string){
    let greet;
    if(name == "Chandler"){
         greet = "Hello Chandler";
         // 1. Block scope.
    }else{
         greet = "Hello Orther Person";
    }
    //let greet;// 3. Not support hoisting.
    console.log(greet);
}
// Call method:
greetPerson5("Chandler");// Hello Chandler

// Case 2:
var a = 1;
let b =2;
if(a==1){
    var a= 20;
    let b=10;
}
//let b =10;// error.
console.log(a);// 20
console.log(b);// 2