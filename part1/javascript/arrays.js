const t = [1, -1, 3];
t.push(5);

console.log(t.length);
console.log(t[1]);

t.forEach(value => console.log(value));

// functional programming

const t2 = [1, -1, 3];
const t3 = t2.concat(5);
console.log(t2);
console.log(t3);

// map method

const a = [1, 2, 3];
const m1 = a.map(value => value * 2);
console.log(m1);
const m2 = a.map(value => "<li>" + value + "</li>");
console.log(m2);

// destructuring assignment

const b = [1, 2, 3, 4, 5];
const [first, second, ...rest] = b;
console.log("first:", first);
console.log("second:", second);
console.log("rest:", rest);