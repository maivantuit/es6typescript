var colorNames:number[] = [1,2,3];

// Case 1:
for(let i=0;i<colorNames.length;i++){
    console.log(colorNames[i]);
}
// for es6:
for(let item2 of colorNames){
    console.log(item2);
}
// Case this, display index.
for(let item2 in colorNames){
    console.log(item2);    
}