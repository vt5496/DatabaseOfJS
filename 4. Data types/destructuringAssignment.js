//Деструктуризация это особый синтаксис который позволяет распаковать
//массивы или объекты в переменные, чтобы удобнее с ними было работать

//array

// let arr = ['Vlad', 'Tkachenko', 21]
// let [myName,, myAge] = arr;
// console.log(myName, myAge)
//
// let user = {};
// [user.name, user.surname, user.age] = arr;
// console.log(user)


//str

// let str = 'Vlad Tkachenko'
// let [name, surname] = str.split(' ')
// console.log(name, '...', surname)

//obj

let obj = {name: 'Vlad', surname: 'Tkachenko', age: 21};

// let {name, surname, age} = obj;
// console.log(name, '...', surname, '...', age)

//another key - value
// let {surname: falsename, name: falsesurname, age} = obj;
// console.log('name:', falsename, 'surname:', falsesurname, age)

delete obj.name

//со значения по умолчанию
let {name: name = 'Dima', surname, age} = obj
console.log(name, '...', surname, '...', age)