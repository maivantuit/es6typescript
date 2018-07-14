// Use object argrument:

var dispColor = function(message:string, ...colors:string[]){
    for(let item in colors){
        console.log(arguments[item]);// value:this is
        console.log(message+" "+colors[item]);// value
        console.log(item);// index        
    }
}
let messeage:string ="This is";
dispColor(messeage,"Red");
