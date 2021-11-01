const arto = {
    name: "Arto Hellas",
    age: 35,
    education: 'PhD',
    greet: function(){
        console.log("Hello, my name is " + this.name);
    },
    doAddition: function(a, b){
        console.log(a + b);
    }
};

arto.greet();
arto.growOlder = function(){
    this.age += 1;
};

console.log(arto.age);
arto.growOlder();
console.log(arto.age);

arto.doAddition(5,6);

const referenceToAddition = arto.doAddition;
referenceToAddition(10,15);

const referenceToGreet = arto.greet;
referenceToGreet();

setTimeout(arto.greet.bind(arto), 1000);