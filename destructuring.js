// 1. array destructuring
const number = [42, 65];
// const x = number[0];
// const x = number[1];

// const [x, y] = [42, 65]
// const [x, y] = number;

function boxify(num1, num2) {
    const num = [num1, num2];
    return num;
}
// const [first, second] = [90, 34];
const [first, second] = boxify(90, 43);
// console.log([first, second]);
// console.log(boxify(43, 4));

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const [firstMovie, secondMovie] = student.movies;
// console.log(firstMovie, secondMovie);

// object destructuring
// const { name, age } = { name: 'alu', age: 14 };
const { name, id, age } = { id: 56, name: 'alu', salary: 3400, age: 14 };
// console.log(name, id, age);

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machin: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'jamalpur',
        drink: 'watter',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}
const { machin, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
// console.log(machin, ide);
// console.log(weight, address);
console.log(brand);
