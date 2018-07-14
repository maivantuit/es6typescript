"use strict";
// var:
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i); // 6.
    }, 1000);
}
// Hàm setTimeout chạy sau 1s. var i truyền vào kiểu tham chiếu.
// Js thuần:
for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
        console.log(i); // 6
    }, 1000);
}
var _loop_1 = function (i_1) {
    setTimeout(function () {
        console.log(i_1); // 5 
    }, 1000);
};
// let:
for (var i_1 = 1; i_1 <= 5; i_1++) {
    _loop_1(i_1);
}
//.Let sẽ tạo scope mới, biến i chỉ nằm trong scope này thôi.
// Nếu use var thì tạo function cho nó:
for (var i = 1; i <= 5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x); // 5.
        }, 1000);
    })(i);
}
//Tạo scope mới, biến i chỉ nằm trong scope này thôi.
//# sourceMappingURL=5letintofor.js.map