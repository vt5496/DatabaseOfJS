const arrayToList = arr => {
    let i = 0;
    let list = {};
    const recursion = list => {
        if (i > arr.length-2) {
            list.value = arr[i];
            list.rest = null;
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

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20