//Case 1:
var getBonus = function(value=10){
    console.log(value);
}
getBonus();// 10

// Case 2:
var getBonus2 = function(value=10,value2:number){
    console.log(value+value2);
}
getBonus2(undefined,10);//20

// Case 3:
var getBonus3 = function(value=10,value2:number,value3=value+value2){
    console.log(value+value2+value3);//40
    console.log(arguments.length);//2
}
getBonus3(undefined,10);
// Tham số(Parammeter) and đối số(arguments): Difference
// Still more other case.
