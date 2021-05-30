class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hi, this is " + this.name + "." + " I am " + this.age + " years old.");
    }
}

const adam = new Person("adam", 15);
adam.greet();

const greta = new Person("greta", 10);
greta.greet();