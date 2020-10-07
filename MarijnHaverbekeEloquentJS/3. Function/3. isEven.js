const isEven = numb => {
    const recursion = () => {
        if (numb === 0) {
            return true
        } else if (numb === 1) {
            return false
        } else if(numb < 0) {
            numb+=2;
            return recursion()
        } else {
            numb-= 2;
            return recursion()
        }
    }
    return recursion()
}

console.log(isEven(-1))