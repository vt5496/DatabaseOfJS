let User = function() {
        this.isAdmin =  false,
        this.sayHi = function() {
            console.log(this.name)
        }
}
class Vova extends User { //можно наследовать любую фукнцию
    constructor(name, age) {
        super();
        this.name = name;
        this.age = age
    }

} //work

let vova = new Vova('Vova', 21)

vova.sayHi() //сработает, так как у прототипа есть эта функция
