class Animal {
    constructor(props) {
        this.age = props.age;
        this.height = props.height;
        this.weight = props.weight
    }


//свойство доступно  только в классе Animal и наследуемых от Animal, (Man.publisher...)
//это работает с помощью prototype. extends дает Rabbit ссылку [[prototype]] на Animal
    static publisher = 'Vladyslav Tkachenko'
}


class Cat extends Animal {
    constructor(props) {
        super(props);
        this.class = 'Mammalia';
        this.family = 'Felidae';
        this.color = props.color;
        this.wool = props.wool;
        this.tail = props.tail;
        this.name = props.name
    }

    sayHi() {
        console.log(`Hi, I'm cat. My name ${this.name}`)
    }
}

class Human extends Animal {
    constructor(props) {
        super(props);
        this.class = 'Mammalia';
        this.family = 'Hominidae';
        this.name = props.name;
        this.surname = props.surname;
        this.education = props.education;
        this.job = props.job;
        this.position = props.position;
    }

    sayHi(){console.log(`Hello, I'm human. My name ${this.name}`)}

    static sayWhoHigher(first, second) {
        first.height - second.height > 0 ? console.log(first.name) : console.log(second.name)
    }
}

class Man extends Human{
    constructor(props) {
        super(props);
        this.gender = 'Man';
    }

    sayHi(){
        super.sayHi();
        console.log(`I'm MAN!`)
    }
}

class Woman extends Human{
    constructor(props) {
        super(props);
        this.gender = 'Woman'
    }

    sayHi(){
        super.sayHi();
        console.log(`I'm WOMAN!`)
    }
}

//создадим объекты на основе классов

let vlad = new Man({
    name: 'Vlad',
    surname: 'Tkachenko',
    age: 21,
    height: 181,
    weight: 70,
    education: 'Web Developer',
    job: 'Web Developer',
    position: 'Front-end'
})

let anya = new Woman({
    name: 'Anya',
    surname: 'Gumenuk',
    age: 18,
    height: 163,
    weight: 50,
    education: 'Web Developer',
    job: 'Web Developer',
    position: 'Front-end'
})

let anfisa = new Cat({
    name: 'Anfisa',
    age: 7,
    height: 8,
    weight: 30,
    color: 'White',
    wool: 'Short',
    tail: true
})

//функция объявленная как метод внутри класса или объекта (function(){},}
// имеет скрытое свойство [[HomeObject]]
//функция как свойсвто объекта (method: function(){}) не имеет [[HomeObject]]

let animal = {
    name: `Животное`,
    eat(){ //animal.eat.[[HomeObject]] === animal
        console.log(`${this.name} ест.`)
    }
}

//super работает именно с этим свойством

//rabbit наследует от animal
let rabbit = {
    __proto__: animal,
    sayHi() {
        super.sayHi() //вместе с super, this при вызове в другом объекте будет === animal
    }
}


console.log(anfisa)