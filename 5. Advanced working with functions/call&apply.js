
//создадим функцию когда для одинаковых х возвращает всегда один и тот же результат
let square = function (x) {
    return x ** 2
}

//создадим функцию кеширования
let cacheDecorator = (func) => {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            console.log(cache)
            return cache.get(x)
        }

        let result = func(x)
        cache.set(x, result);
        return result;
    }
}

//зададим кеширование функции square
square = cacheDecorator(square)

console.log(square(2))
console.log(`Again ${square(2)}`)

console.log(square(3))
console.log(`Again ${square(3)}`)

