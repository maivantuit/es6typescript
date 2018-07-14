"use strict";
// Type data:
/**
 1. Var
 2. Let
 3. Number
 4. String
 5. Boolean
 6. Any
 7. ArrayList<>
 8. Tuple
 9. Enum
 10. Void
 11. Null and Undefined
 12. Nerver: Throw.
 */
// EX1:
var num = 20;
console.log(num);
// EX2:
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var item = Color.Green;
console.log(item.toString()); // 1.
//# sourceMappingURL=7typedata.js.map