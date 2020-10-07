const everyReduce = (arr, test) =>
    arr.reduce((acc, item) => acc === true ?
        test(item) :
        false, true)


const everyFor = (arr, test) => {
    let result = true;
    for (let i = 0; i < arr.length; i++) {
        if (result) {
            result = test(arr[i])
        } else {
            result = false
        }
    }
    return result
}

console.log(everyFor([1, 3, 5], n => n < 10));
// → true
console.log(everyFor([2, 4, 16], n => n < 10));
// → false
console.log(everyFor([], n => n < 10));
// → true

console.log(everyReduce([1, 3, 5], n => n < 10));
// → true
console.log(everyReduce([2, 4, 16], n => n < 10));
// → false
console.log(everyReduce([], n => n < 10));
// → true