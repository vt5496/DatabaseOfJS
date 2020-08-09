//помимо значения value свойства имеют ещё 3 спец атрибута которые назыв флаги

//writable – true свойство можно изменить, false только для чтения.
//enumerable – true свойство перечисляется в циклах, false циклы его игнорируют.
//configurable – true свойство можно удалить, а эти атрибуты можно изменять, false это делать нельзя.

//создадим обычный объект
//когда мы создаем новый объект все эти флаги имеют значение true
let user = {
    name: 'Vlad',
    surname: 'Tkachenko',
    age: 21,
    secretWord: 'Anfisa',
}

//получить значение флагов Object.getOwnPropertyDescriptor(obj, propertyName)
let userName = Object.getOwnPropertyDescriptor(user, 'name')
console.log(userName) //{ value: 'Vlad', writable: true, enumerable: true, configurable: true }

//изменить значение флага Object.defineProperty(obj, propertyName, descriptor)
Object.defineProperty(user, 'name', {value: 'Vlad', enumerable: false})
console.log(user) //свойтво name стало не перечисляемым явно

//добавим свойство с помощью Object.defineProperty
Object.defineProperty(user, 'sister', {value: 'Alena'})
console.log(user) //по умолчанию все флаги от sister имеют false
console.log(user.sister)

//изменить значение флагов Object.defineProperties(obj, descriptor)
Object.defineProperties(user, {
    brother: {
        value: false
    },
    daddy: {
        value: 'Vadim',
        enumerable: true //можно перечислять
    }
})

//тренировка добавления свойств
Object.defineProperty(user, 'granny', {
    value: 'Larisa',
    writable: false,
    enumerable: true,
    configurable: true
})

Object.defineProperty(user, 'oneFriend', {
    value: 'Vlad Polyshuk',
    writable: false,
    enumerable: true,
    configurable: false
})
Object.defineProperty(user, 'secondFriend', {
    value: 'Ura',
    writable: false,
    enumerable: true,
    configurable: false
})
Object.defineProperty(user, 'thirdFriend', {
    value: 'Dima',
    writable: false,
    enumerable: true,
    configurable: false
})

//получение всех флагов свойства
console.log(Object.getOwnPropertyDescriptor(user, 'oneFriend'))


