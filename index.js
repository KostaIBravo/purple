let numbers;
numbers = [1, 2, 3, 4, 5, 99];

let a;
let person;
person = {
    name: "Andreas",
    age: 17,
    city: "Berlin",
    favourite_numbers: numbers,
    "favourite characters": [
        { name: "Jean-Baptiste Grenouille", age: 25, city: "Paris" },
        { name: "Macbeth", age: 35, city: "Edinburgh" },
        { name: "Swain", age: 50, city: "Noxus" },
    ],
};

/*console.log(person["favourite_numbers"]);
let new_numbers = numbers.slice(0, 4);
console.log(new_numbers);
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x + 20);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
const sayHello = (name) => {
    let message = `Hello ${name}`;

    return message;
};

console.log(sayHello("Dad"));
const sayBye = (name) => {
    let good = `Bye , ${name}`;
    return good;
};

console.log(sayBye("Bob"));

const read = (arr) => {
    let newArray = arr;
    return newArray;
};

console.log(read(["butter", "cheese", "ham"]));
const fnOne = (arr) => {
    let a = arr[0] + 2;
    return a;
};

console.log(fnOne(["butter", "cheese", "ham"]));



*/

const getLessThanZero = (arr) => {
    console.log(getLessThanZero);
    let newArray = new Array();
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }
    return newArray;
};
console.log(getLessThanZero([1, 2, -1, -90, 10]));
