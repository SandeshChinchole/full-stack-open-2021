class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };

    greet(){
        console.log("Hello, my name is " + this.name);
    };
};

const adam = new Person("adam", 12);
adam.greet();
const john = new Person("john", 13);
john.greet();
