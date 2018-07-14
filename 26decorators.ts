// Người trang trí, bổ sung tính năng gốc để mở ra tính năng mới.
// tính năng này đang thử nghiệm.

// tsconfig.json: ,"experimentalDecorators": true,        /* Enables experimental support for ES7 decorators. */

// cmd: tsc --target ES5 --experimentalDecorators

// EX 1:
// Use at here:
// @Component({
//     selector:"my-app",
//     template:"<h1>Welcome to {{name}} Decorators</h1>"
// })
// Phần này như là phần view.

export class AppComponent{
     name:string ="Mai Van Tu";
}
