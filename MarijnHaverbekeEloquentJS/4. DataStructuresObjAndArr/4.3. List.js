const arrayToList = arr => {
    let i = 0;
    let list = {};
    const recursion = list => {
        if (i === arr.length-1) {
            list.value = arr[i];
            list.rest = null;
            return list
        } else {
            list.value = arr[i];
            list.rest = {};
            i++;
            recursion(list.rest)
        }
    }
    recursion(list)
    return list;
}

const listToArray = list => {
    let array = []
    const recurse = child => {
        if (child.rest){
            array.push(child.value)
            return recurse(child.rest)
        } else {
            array.push(child.value)
            return array
        }
    }
    return recurse(list)
}

const nth = (list, numb) => {
    let array = []
    const recurse = child => {
        if (child.rest){
            array.push(child.value)
            return recurse(child.rest)
        } else {
            array.push(child.value)
            if (numb>array.length-1) return undefined
            return array[numb]
        }
    }
    return recurse(list)
}

const prepend = (item, list = null) =>
    ({name: item, rest: list})

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}