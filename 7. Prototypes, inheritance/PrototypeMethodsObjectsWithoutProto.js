let person = new Object({
    name: 'Vlad',
    age: 21,
    position: 'front-end',
    consoleLogPos() {
        console.log(this.position)
    }
})
let user = new Object({
    age: 22,
    consoleLogSayHi() {
        console.log('Hi')
    }
})

//создает объект и первый аргумент это прототип
let Anna = Object.create(person, {
    name: {
        value: 'Anna',
        writable: false, //запрещает изменять значение свойства
        enumerable:  false, //запрещает перечислять это свойство
        configurable: true
    }

})
Anna.age = 19

//покажем объект Anna
console.log(Anna)

//изменим позицию
Anna.consoleLogPos() //front-end
Anna.position = 'HR manager'
Anna.consoleLogPos() //HR manager

//изменим имя Anna, но оно не изменится
Anna.name = 'Anya';
console.log(Anna.name)

console.log(Object.getPrototypeOf(Anna) === person) //true

//change prototype of Anna
Object.setPrototypeOf(Anna, user)
console.log(Object.getPrototypeOf(Anna) === user) //true
