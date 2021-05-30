const object1 = {
    name: "Artes Hellas",
    age: 35,
    education: "PhD",
}

const object2 = {
    name: "fullstack",
    level: "Intermediate",
    size: 5,
}

const object3 = {
    name:{
        first: "dan",
        last: "rad",
    },
    grades: [1, 2, 3, 4, 5],
    department: "Stanford comp science",
}

console.log(object1.name);

const fieldName = "age";
console.log(object1[fieldName]);

object1.address = "Helsinki";
object1["secret number"] = 12345;

console.log(object1.address);
console.log(object1);