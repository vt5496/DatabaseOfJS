//итерируемый объект это концепт объекта который может перебираться в цикле for...of

//добавим в объект метод для перебора под названием Symbol.iterator
//когда for of запускается он вызывает метод Symbol.iterator
//этот метод должен вернуть итератор, объект с методом next
//дальше for...of работает с этим возвращенным объектом

//когда for...of хочет получить следующее значение он вызывает next() этого объекта
//next() возвращает объект {done: Boolean, value: any}


let range = {
    from: 0,
    to: 5
}

//for..of вызывает эту функцию у [Symbol.iterator]
range[Symbol.iterator] = function () {
    return {
        //далее for..of работает только с этим итератором
        current: this.from,
        last: this.to,

        //каждый раз запрашивается этот метод до того как done будет true
        next(){
            if (this.last >= this.current) {
                return {value: this.current++, done: false}
            } else {
                return { done: true}
            }
        }
    }
}

// for (let k of range){
//     console.log(k)
// }

//таким образом Итерируемые объекты – это объекты,
//которые реализуют метод Symbol.iterator, как было описано выше.

//Псевдомассивы – это объекты, у которых есть индексы и свойство length,
// то есть, они выглядят как массивы.

let numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    length: 4 //в зависимости от этого свойства разное количество элементов
    //добавиться в массив методом Array.from(псевдомассив)
}

let arr = Array.from(numbers)
//console.log(arr)

let arr2 = Array.from(numbers, num => num**2)
//console.log(arr2)


//cтрока так же является псевдомассивом, так как обладает свойством length
let str = 'Hello';
let arrStr = Array.from(str)
console.log(arrStr)