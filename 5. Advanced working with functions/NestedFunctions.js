function stepen (power) {
    return function (value) {
        return value ** power
    }
}

let square = stepen(2)
let cube = stepen(3)

console.log(square(3)) //9
console.log(cube(3)) //27