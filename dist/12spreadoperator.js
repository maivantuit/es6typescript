"use strict";
// Spread: Bóc tách 1 mảng.
// Use object argrument:
var dispColor2 = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var item_1 in colors) {
        console.log(message + " " + colors[item_1]); // value        
    }
};
var messeage2 = "This is";
var listColor = ["Red", "Green", "Yellow"];
// dispColor2(messeage2,"Red");
dispColor2.apply(void 0, [messeage2].concat(listColor));
//# sourceMappingURL=12spreadoperator.js.map