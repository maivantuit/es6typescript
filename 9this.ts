var employee = {
    id: 1,
    greet: function () {
        console.log(this.id); // 1
    }
}
console.log(employee.greet()); // undefined

var employee2 = {
    id: 1,
    greet: function () {
        var context=this;
        console.log(context.id); // 1
    }
}
console.log(employee2.greet()); // undefined

// Use arrow function giải quyết được khi sử dụng với từ khóa this.

