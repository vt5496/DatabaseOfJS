//Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ.
//когда функция запускается она ищет переменные в скрытом объекте Lexical Environment
//Lexical Environment имеет две части Environment Record, Outer(внешнее) Lexical Environment
//и если не находит во внутреннем окружении Environment Record,
//то выходит к следующему внешнему блоку Lexical Environment и так до Global Lexical Environment,
//если и там нет, то возвращает undefined

let name = 'Vlad'

function f(value) {
    return `${name} ${value}` //name находиться в Outer Global Lexical Environment,
    //а value находиться во внутреннем Environment Record
}

console.log(f('bad'))

//новое Lexical Environment создается каждый раз когда вызывается функция
console.log(f('good'))


//вложенные функции

function makeCounter() {
    let count = 0;
    return function f() {
        return ++count
    }
}

let counter1 = makeCounter(),
    counter2 = makeCounter();


console.log(makeCounter()()) //1
console.log(counter1()) //1
console.log(counter1()) //2
console.log(counter2()) //1 у каждой фукнции свое лексическое окружение и локальная переменная count
