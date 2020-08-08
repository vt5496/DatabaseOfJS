function mathem(x, n) {
    if (n === 1) {
        return x
    } else {
        return  x * mathem(x, n-1)
    }
}

console.log(mathem(10,3))
