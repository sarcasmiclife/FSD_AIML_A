const person = {
    name: "john",
    age: 30,
    salary: 500006.25,
}

const {name, age, salary} = person;
console.log(name);
console.log(age);
console.log(salary);

const emp = ["abc", 45, 1000023.50, "GZB"];
const [name1, age1, sal, city] = emp;
console.log(name1);
console.log(age1);