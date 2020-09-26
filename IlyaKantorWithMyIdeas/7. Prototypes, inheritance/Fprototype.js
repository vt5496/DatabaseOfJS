//функция конструктор имеет свойство prototype, это свойство содержит объект, который будет унаследован
//новым созданым объектом на базе этой функции

//создадим объект
let user = {
    isAdmin: false,
    level: 'first',
    sayHello(){console.log('Hello')}
}

//создадим функцию конструктор
function User (name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
}

//по умолчанию у функций .prototype = constructor
User.prototype = user;

let vlad = new User('Vlad', 'Tkachenko', '21')

console.log(vlad.isAdmin) //false
vlad.sayHello() //Hello


console.log('=================')
//прототип по умолчанию
function Rabbit(name) {
    this.name = name
}

let rabbit1 = new Rabbit('Alena')
console.log(rabbit1.constructor === Rabbit)

//не зная прототип созданого rabbit, мы можем создать объект с таким же прототипом
let rabbit2 = new rabbit1.constructor('Nastya');
console.log(rabbit2)