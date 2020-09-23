//Map это коллекция которая может иметь в ключах любой тип значения

let enries = [
    ['name', 'Vlad'],
    ['age', 21],
    ['position', 'Junior']
]
let user = {
    name: 'Yura',
    age: 21
}

//#1 создает коллекцию map
let map = new Map(enries)

//#2 устанавливает ключ и его значение
map.set(user, 'friend')
map.set('1', 'str')
map.set(1, 'numb')

//#3 получает значение по ключу
// console.log(map.get(1))
// console.log(map.get(user))

//console.log(map)

//#4 удаляет ключ user и если успешно возвращает true
//map.delete(user)

//#5 удаляет все значения
// map.clear()
//console.log(map)

//#6 выводит все ключи
//console.log(map.keys())

//#7 прототип map
//console.log(Object.getPrototypeOf(map))

//#8 перебор forEach or for of
//чтобы перебрать map необходимо использовать
//map.keys() – keys, map.values() – values, map.entries() – по умолчанию [key, value]
// for (let k of map) {
//     console.log(k)
// }

//#9 можно из map сделать obj, или из obj сделать map
let obj = Object.fromEntries(map)
console.log(obj)

let newEntries = Object.entries(obj)
console.log(newEntries)

let newObj = new Map(Object.entries(obj))
console.log(newObj)
