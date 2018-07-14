"use strict";
/// Let
// 1. Block scope.
// 2. Cannot re-assign.
// 3. Not support hoisting.
// Case 1:
function greetPerson5(name) {
    var greet;
    if (name == "Chandler") {
        greet = "Hello Chandler";
        // 1. Block scope.
    }
    else {
        greet = "Hello Orther Person";
    }
    //let greet;// 3. Not support hoisting.
    console.log(greet);
}
// Call method:
greetPerson5("Chandler"); // Hello Chandler
// Case 2:
var a = 1;
var b = 2;
if (a == 1) {
    var a = 20;
    var b_1 = 10;
}
//let b =10;// error.
console.log(a); // 20
console.log(b); // 2
//# sourceMappingURL=4let.js.map