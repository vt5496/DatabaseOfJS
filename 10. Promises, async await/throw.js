//обработчик исключений. Инструкция throw приостанавливает функцию

let add = function (a, b){
    if (typeof a !== 'number' || typeof b !== 'number'){
        throw{
            name: 'Type ERROR',
            message: 'Add need number'
        }
    }
    return console.log(a + b)
}

let tryDecorator = function (func) {
    return (function () {try{
        func(5, 'hey')
    } catch (e) {
        console.log(e.name + ' ' + e.message)
    }})
}

add = tryDecorator(add)

add()
