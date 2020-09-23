const sum = (arr) =>
    arr.reduce((acc, item) => acc + item, 0)

const range = (start, finish) => {
    finish++;
    let arr = [];
    const recourse = () => {
        if (start !== finish) {
            arr.push(start);
            ++start;
            return recourse();
        } else {return arr}
    }
    return recourse()
}

console.log(sum(range(1, 10)))