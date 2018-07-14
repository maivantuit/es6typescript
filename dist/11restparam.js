"use strict";
// Use object argrument:
var dispColor = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    for (var item_1 in colors) {
        console.log(arguments[item_1]); // value:this is
        console.log(message + " " + colors[item_1]); // value
        console.log(item_1); // index        
    }
};
var messeage = "This is";
dispColor(messeage, "Red");
//# sourceMappingURL=11restparam.js.map