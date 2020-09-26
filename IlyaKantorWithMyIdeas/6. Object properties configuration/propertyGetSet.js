//есть обычные свойства данные (data properties)
//есть свойства аксессоры (accessor properties), которые внутри объекта выглядят как функции,
//но при вызове работают как свойства

//свойства аксессоры представлены методами геттер для чтения и сеттер для записи
//литерально обозначаются get и set

let user = {
    _name: 'Vlad',
    _surname: 'Tkachenko',
    age: 21,
    position: 'front-end',
    sport: true,
    get name() {
        return this._name
    },
    get surname() {
        return this._surname
    },
    get fullName() {
        return `${this._name} ${this._surname}`
    } //получим полное имя
    //снаружи выглядит как обычное свойство
}

//изменим fullName
user.fullName = 'Dima Gorobets' //ошибка, у свойства есть только сеттер
console.log(user.fullName) //ничего не изменилось

//посмотрим и изменим name
console.log(user.name) //Vlad
user.name = 'Alena'; //ничего не изменит, ведь есть только сеттер
console.log(user.name) //Vlad

//добавим сеттер
//Свойства-аксессоры не имеют value и writable, но взамен предлагают функции get и set.
Object.defineProperty(user, 'fullName', {
    set(value) {
        [this.name, this.surname] = value.split(' ')
    }
})

user.fullName = 'Dima Gorobets' //теперь есть сеттер
console.log(user.fullName)


//добавим сеттер для name и surname
Object.defineProperties(user, {
    name: {
        set(value) {
            if(value.length > 5) {
                [this._name] = value
            } else {
                console.log('Имя очень короткое!!!!')
            }
        },
        enumerable: true
    },
    surname: {
        set(value) {
            this._surname = value
        }
    }
})

user.name = 'Short' //Имя очень короткое!!

//console.log(user)

//создадим с помощью конструктора объект и добавим ему get
function User(name, age) {
    this.name = name;
    this.age = age
}
let Vlad = new User('Vlad', 21)
console.log(Vlad)


//изменим age на birthday и посчитаем age
function User(name, birthday) {
    this.name = name;
    this.birthday = birthday
    Object.defineProperty(this, 'age', {
        get () {
            let todayYear = new Date().getFullYear();
            return `Birthday: ${todayYear - this.birthday.getFullYear()}`
        }
    })
}

Vlad = new User('Vlad', new Date(1999, 5, 25))
console.log(Vlad)
console.log(Vlad.age)

