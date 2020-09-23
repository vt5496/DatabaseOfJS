const getSum = numb => {
    let sum = 0;
    const recursion = () => {
        if (numb === 0) {
            return sum
        } else {
            sum += numb;
            numb--;
            return recursion()
        }
    }
    return recursion()
}

console.log(getSum(10))