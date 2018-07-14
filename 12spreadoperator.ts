// Spread: Bóc tách 1 mảng.
// Use object argrument:

var dispColor2 = function(message:string, ...colors:string[]){
    for(let item in colors){        
        console.log(message+" "+colors[item]);// value        
    }
}
let messeage2:string ="This is";
let listColor = ["Red","Green","Yellow"];
// dispColor2(messeage2,"Red");
dispColor2(messeage2,...listColor);
