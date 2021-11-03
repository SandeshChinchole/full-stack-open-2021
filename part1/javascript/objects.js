const object3 = {
    name: {
        first: "Daniel",
        last: "Radcliffe"
    },
    grades: [1, 2, 3, 4],
    university: "Stanford University"
};

console.log(object3.name);
const fieldName = "university";
console.log(object3[fieldName]);

object3.location = "NYC";
object3["email_address"] = "daniel@email.com";
console.log(object3);