const sum = (arr) =>
    arr.reduce((acc, item) => acc + item, 0)

const range = (start, finish, operation = +1) => {
    let arr = [];
    const recourse = () => {
        if (start !== finish) {
            arr.push(start);
            start += operation;
            return recourse();
        } else {
            arr.push(start);
            start += operation;
            return arr
        }
    }
    return recourse()
}

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55