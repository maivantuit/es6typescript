class Person2{
    public namePer:string;

    constructor(namePer:string){
        this.namePer = namePer;
    }
}

class Person3{        
    constructor(public namePer:string){
        this.namePer = namePer;
    }
}

var per1 = new Person3("Mai Van Tu 1");
console.log(per1.namePer);//Mai Van Tu 1
var per3 = new Person3("Mai Van Tu 3");
console.log(per3.namePer);//Mai Van Tu 3