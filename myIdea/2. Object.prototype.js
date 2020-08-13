let str = 'string';

let str2 = new String('string') //выводит объект String
let str3 = String('string') //одинаковый с str

Object.prototype.sayHello = function () { //зададим прототипу конструктора Object новый метод
    console.log('Method for all data type js')
}

str.sayHello() //работает