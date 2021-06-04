let data = 'abc';
let num = [5, 4, 8, 11, 60];
let total = 0;
for (let i = 0; i < num.length; i++) {
    console.log(`before: ${total}`);
    total += num[i];
    console.log(`after: ${total}`);
}
console.log(`The sum is: ${total}`);