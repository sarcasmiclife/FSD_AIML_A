const mySet = new Set();
console.log(mySet);
mySet.add(24);
mySet.add(21);
mySet.add(12);
mySet.add(24);
mySet.add(21);
mySet.add(69);
console.log(mySet);

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenSet = num.filter((n) => (n%2 == 0))
console.log(evenSet);