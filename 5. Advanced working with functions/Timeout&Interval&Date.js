//js не имеет встроенных setTimeout&setInterval, но окружение браузеров и Node поддерживают
//эту спецификацию

let sayHi = () => console.log('Hi')
let date = () => console.log(
    'Hours:', (new Date).getHours(),
    ', Minutes:', (new Date).getMinutes(),
    ', Seconds:', (new Date).getSeconds())

//let timeout = setTimeout(sayHi, 1000) //по завершению запустит функцию sayHi
//let interval = setInterval(date, 2000) //каждые 2 сек запустит функцию

console.log((new Date(24243421798124)).getFullYear()) //год с 1970 года через заданное кол мс
console.log((new Date).getFullYear(Date.parse('2019-11-14T20:11:13.255')))