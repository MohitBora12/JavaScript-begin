
const a = prompt("Enter the number for factorial")

let arr = []

for (let x = 1; x <= a; x++){
    arr.push(x)
}

const fact = (a, b) => {
    return a * b;
}

console.log(arr.reduce(fact));