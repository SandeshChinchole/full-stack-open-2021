const sum = (p1, p2) => {
    console.log("p1:", p1);
    console.log("p2:", p2);
    return p1 * p2;
};

const result = sum(5, 6);
console.log(result);

// map method

const t = [1,2, 3];
const tSquared = t.map(value => value * value);
console.log(tSquared);
console.log("t:", t);

function product(a, b){
    return a * b;
};

const productResult = product(2,3);
console.log(productResult);

const average = function(a, b){
    return (a + b)/2;
};

const averageResult = average(2,5);
console.log(averageResult);