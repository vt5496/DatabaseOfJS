t = (...t) => console.log(...t);

//метод – свойство-функция
let user = {
    name: 'Vlad',
    age: 21,
    man: true
}

//создадим метод способом Function Expression
t('#1')
user.sayHi = function (name) {
    t(`Hi, ${name}!`)
}
user.sayHi('Dima') //'Hi, Dima!'

//or
function sayHello (name) {
    t(`Hello, ${name}!`)
}
user.sayHello = sayHello;
user.sayHello('Vova')

//сразу записать метод
t(`
#2`)
let admin = {
    name: 'Vladyslav',
    age: 21,
    sayAge () {
        t(this.age)
    },
    sayName: function () {
        t(this.name)
    }
}
admin.sayAge(); //21
admin.sayName(); //Vladyslav
