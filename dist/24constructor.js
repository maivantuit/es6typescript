"use strict";
var Person2 = /** @class */ (function () {
    function Person2(namePer) {
        this.namePer = namePer;
    }
    return Person2;
}());
var Person3 = /** @class */ (function () {
    function Person3(namePer) {
        this.namePer = namePer;
        this.namePer = namePer;
    }
    return Person3;
}());
var per1 = new Person3("Mai Van Tu 1");
console.log(per1.namePer); //Mai Van Tu 1
var per3 = new Person3("Mai Van Tu 3");
console.log(per3.namePer); //Mai Van Tu 3
//# sourceMappingURL=24constructor.js.map