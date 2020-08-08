//new Function('arg', 'arg2', '...arg', 'body')
//new Function('adr, arg2, ...arg', 'body')

let f = new Function('a', 'b', 'return a+b')
console.log(f(2, 5))

let f2 = new Function('a, b', 'return a+b')
console.log(f2(1, 2))

//new Function внутри другой функции получает переменные в глобальном окружении


function f3() {
    let value = 2
    let f4 = new Function('console.log(value)')
    return f4()
}
f3() //выдаст ошибку