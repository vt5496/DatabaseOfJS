class PowerArray extends Array {
    isEmpty (){
        return this.length === 0
    }

    static [[Symbol.species]](){ // после вызова на созданых массивах
        return Array //методов map, filter... возвращает массив унаследованый от Array
    }
}

let arr = new PowerArray(1, 2, 3, 4, 5)
console.log(arr.isEmpty()) //false

let filteredArr = arr.filter(item => item >= 10);
console.log(filteredArr); // 10, 50
console.log(filteredArr.isEmpty()); // true

console.log(arr.constructor === PowerArray) //true

PowerArray.isArray(arr) //не работает, встроенные классы не передают свои
//static методы
