const reverseArr = arr => {
    let lengthArr = arr.length - 1;
    let newArr = [];
    const recourse = () => {
        if (lengthArr < 0) {
            return newArr;
        } else {
            newArr.push(arr[lengthArr]);
            --lengthArr;
            return recourse()
        }
    }
    return recourse()
}

console.log(reverseArr([1, 2, 3, 4, 5]))

const reverseArrayInPlace = arr => {
    let index = arr.length - 1;
    let arrLength = arr.length;
    let i = 0;
    const recourse = () => {
        if (i === arr.length/2) {
            for (let i = 0; i < arrLength; ++i) {
                arr.shift()
            }
        } else {
            arr.push(arr[index]);
            --index;
            ++i;
            return recourse()
        }
    }
    return recourse()
}
let arr = [0, 1, 2, 3, 4, 5]
reverseArrayInPlace(arr)
console.log(arr)