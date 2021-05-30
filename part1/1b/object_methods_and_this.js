const arto = {
    name: "Arto Hellas",
    age: 35,
    education: "PhD",
    greet: function(){
        console.log("Hello everyone, this is " + this.name)
    },
    doAddition: function(a, b){
        console.log(a + b)
    }
}

//console.log(arto.name);
//arto.greet();

arto.growOlder = function(){
    this.age = this.age + 1;
}

//console.log(arto.age);
//arto.growOlder();
//console.log(arto.age);

//arto.doAddition(2, 3);
//const referenceToAddition = arto.doAddition;
//referenceToAddition(10, 5);

// calling greet method using reference to the method

//const referenceToGreet = arto.greet;
//referenceToGreet();

setTimeout(arto.greet.bind(arto), 1000);