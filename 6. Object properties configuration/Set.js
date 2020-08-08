//Set это коллекция неповторяемых значений

//#1 объявление Set
let set = new Set(['Vlad', 'Vova', 'Misha', 'Andrew'])
console.log(set)

//#2 попробуем добавить значения
// set.add('Dima').add('Vlad') //'Vlad уже имеется и не добавиться
// console.log(set)

//#3 добавим Obj
let Vlad = {
    name: 'Vlad',
    age: 21
}
set.add(Vlad)
//console.log(set)

//#4 API Set
set.size //возвращает количество значений
set.delete(Vlad) //удаляет значение
set.has(Vlad) //false, проверяет наличие значения
set.clear() //удаляет все значения