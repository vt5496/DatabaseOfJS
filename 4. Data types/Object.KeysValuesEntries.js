//у глобального объекта Object есть методы для создания массивов
//из ключей объекта Object.keys(object), значений объекта Object.values(object)
//или сделать массив пар ключ значение Object.entries(object)

let obj = {
    name: 'Vlad',
    surname: 'Tkachenko',
    age: 21,
    get fullName() {return `${this.name} ${this.surname}`},
    position: 'front-end'
}

console.log(Object.keys(obj))
console.log(Object.values(obj))
console.log(Object.entries(obj))