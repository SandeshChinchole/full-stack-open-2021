const sum = (n1, n2) => {
    console.log("n1: " + n1);
    console.log("n2: " + n2);
    return n1 + n2;
}

const result = sum(1, 2);
console.log("Result: " + result);

const square = p1 => p1 * p1;

const result2 = square(2);
console.log("result2: " + result2);

const t = [1, 2, 3, 4, 5];
const m1 = t.map(value => value * value);
console.log(m1);

function product(a, b){
    return a * b;
}

const result3 = product(2, 3);
console.log("result3: " + result3);

const average = function(c, d) {
    return (c + d)/2;
}

const result4 = average(5, 6);
console.log("result4: " + result4);