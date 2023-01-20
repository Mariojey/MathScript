//Write a Random intinger in range 0 -> .... 
let number = 100

const string = []

i = 1

while (i <= 15) {
    string.push(number ** i)
    i += 1
}

let index = Math.floor(Math.random() * 8);

let meter = string[index + 1] + string[index + 2]
let denominator = string[index - 2] + string[index - 1]

let quoient = meter / denominator;
console.log(string);
console.log(Math.pow(quoient, 1 / 3))