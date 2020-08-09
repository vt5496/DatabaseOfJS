//Объект можно создать с помощью функции конструктора
//но в JS есть более продвинутая конструкция class

//создадим класс User

class User { //let User = class{ – так тоже можно
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    //добавим свойства в класс
    nameClass = 'User';
    sayNameClass () {
        console.log(this.nameClass)
    }

    //добавим методы в класс
    sayName () {
        console.log(this.name)
    }
    saySurname() {
        console.log(this.surname)
    }

    //get & set
    get name() {
        return this._name
    }

    set name(value) {
        value.length < 4 ? console.log('Имя слишком короткое') : this._name = value;
    }
}

//класс не может быть вызван как обычная функция
//User() //error

//создадим объект на основе класса User с помощью оператора new
let vlad = new User('Vladyslav', 'Tkachenko', 21)
console.log(vlad.constructor === User) //true
vlad.name = 'Vld'; //имя слишком короткое

//геттеры и сеттеры добавляются вот так
//добавим свойства уже созданному классу и вызовем в уже созданном объекте vlad
Object.defineProperty(User.prototype, 'age', {
       get age () {
           return this._age;
       },
       set age (value) {
           return this._age = value;
       }
})

//установим возраст с помощью сеттера
vlad.age = 5
console.log(vlad.age)


