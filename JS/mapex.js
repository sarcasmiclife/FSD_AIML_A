const myMap = new Map(
    [
        ["key1", 123],
        [34, "js"],
    ]
);

console.log(myMap.get(34));
console.log(myMap.get("key1"));

myMap.set("key2", "java");
myMap.set("key3", 101.45);

console.log(myMap.get("key2"));
console.log(myMap.get("key3"));