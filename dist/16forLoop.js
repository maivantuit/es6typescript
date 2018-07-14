"use strict";
var colorNames = [1, 2, 3];
// Case 1:
for (var i_1 = 0; i_1 < colorNames.length; i_1++) {
    console.log(colorNames[i_1]);
}
// for es6:
for (var _i = 0, colorNames_1 = colorNames; _i < colorNames_1.length; _i++) {
    var item2 = colorNames_1[_i];
    console.log(item2);
}
// Case this, display index.
for (var item2 in colorNames) {
    console.log(item2);
}
//# sourceMappingURL=16forLoop.js.map