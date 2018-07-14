"use strict";
// var 1:
function greetPerson(name) {
    if (name == "Chandler") {
        var greet = "Hello Chandler";
    }
    else {
        var greet = "Hello Orther Person";
    }
    console.log(greet);
}
// Call method:
//greetPerson("Chandler");// Hello Chandler
// var 2:
function greetPerson3(name) {
    //var greet;
    if (name == "Chandler") {
        greet = "Hello Chandler";
    }
    else {
        greet = "Hello Orther Person";
    }
    var greet;
    console.log(greet);
}
// Call method:
greetPerson3("Chandler"); // Hello Chandler
// let:
function greetPerson2(name) {
    if (name == "Chandler") {
        var greet = "Hello Chandler";
    }
    else {
        var greet = "Hello Orther Person";
    }
    //console.log(greet);// error:[ts] Cannot find name 'greet'.
}
//# sourceMappingURL=3hosting.js.map