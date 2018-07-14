class Person{
    name:string;
    constructor(name:string){
        this.name = name;        
    }    
    speak(){
        console.log("This is method normal");
    }
    static talkMethod(){
        console.log("This is method static");
    }
    run(){
        console.log("Person running");
    }
    getName(){
        return this.name;
    }
}
// new object.
let objP1 = new Person("Mai Van Tu");
objP1.speak();// Run 3
Person.talkMethod();// Run 2
objP1.run();// Run 1
// Result: Method run chay dau tien, den method statis and method normal, du o sau.

class Employee extends Person{
    constructor(name:string){
        super(name);
        console.log(name);//Cop Huynh
    }
    getNameEm(){        
        return super.getName();
    }
}

// new object:
let objEm1 = new Employee("Cop Huynh");
console.log(objEm1.getNameEm());// Cop Huynh