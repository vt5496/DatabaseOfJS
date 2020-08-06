t = (...t) => console.log(...t);

//Символ (symbol) – примитивный тип данных, использующийся для создания уникальных идентификаторов.
//символ – уникальный идентификатор, ГАРАНТИРОВАНО уникальный
t(`
#1`)
let id = Symbol('id'),
    id2 = Symbol('id');

t(id === id2); //false

//символы не преобразовываются автоматически в строки
//alert(id) не сработает
//alert(id.description) или alert(id.toString()) сработают

//позволяют создавать скрытые свойства для объектов
t(`
#2`)
let user = {
    name: 'Vlad'
}

user[id] = '13';
user[id] = '14'; //будет создано новое свойство без конфликта
console.log(user.id) //undefined

//строка id не сработает
user.id = '13'; //13
user.id = '14'; //14, свойство изменит своё значение

//символ в литерале объекта
let admin = {
    name: 'Vladyslav',
    [id]: 13 //просто id не сработает
}


//символы игнорят for...in
t(`
#3`)
for (let prop in admin) t(prop)

//метод Object.assign({}, obj) копирует Symbol
t(`
#4`)
let clone = Object.assign({}, admin)
t(clone[id])

//метод Symbol.for('value') читает символы из глобального реестра
t(`
#5`)
id = Symbol.for("id"); // если символа не существует, он будет создан
let idCopy = Symbol.for("id"); // читаем символ из глобального реестра и записываем его в переменную
t( id === idCopy ); // true

//метод Symbol.keyFor(key) действует наоборот к S.for
t(`
#6`)
t(Symbol.keyFor(id)) //id
t(Symbol.keyFor(id2)) //символ не глобальный, undefined

// Object.getOwnPropertySymbols(obj) – встроенный метод,
//с его помощью можно получить все свойства объекта с ключами-символами;
//Reflect.ownKeys(obj) – возвращает все ключи объекта, включая символьные