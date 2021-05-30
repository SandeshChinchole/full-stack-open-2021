const t = [1, -1, 2, 3];
console.log(t);

t.push(5);
console.log(t);

console.log(t[1]);

console.log(t.length);

t.forEach(value => {
    console.log(value);
});

// functional programming paradigm

const t2 = [1, -1, 3];
const t3 = t2.concat(5);

console.log(t2);
console.log(t3);

const t4 = [1, 2, 3];
const m1 = t4.map(value => value * 2);

const m2 = t4.map(value => "<li>" + value + "</li>");

console.log(m1);
console.log(m2);

const t5 = [1, 2, 3, 4, 5];
const [first, second, ... rest] = t5;
console.log(first, second);
console.log(rest);