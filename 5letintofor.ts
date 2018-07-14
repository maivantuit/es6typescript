// var:
for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
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

// let:
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
        console.log(i); // 5 
    }, 1000);
}
//.Let sẽ tạo scope mới, biến i chỉ nằm trong scope này thôi.

// Nếu use var thì tạo function cho nó:
for (var i = 1; i <= 5; i++) {
    (function (x: number) {
        setTimeout(() => {
            console.log(x); // 5.
        }, 1000);
    })(i)
}
//Tạo scope mới, biến i chỉ nằm trong scope này thôi.
