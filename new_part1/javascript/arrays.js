const t = [1, -1, 3];

t.push(5);

console.log(t);
console.log(t.length);
console.log(t[0]);

t.forEach(value => {
    console.log(value);
})