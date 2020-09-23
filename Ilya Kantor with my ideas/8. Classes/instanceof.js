let arr = [1, 2, 3, 4]

//instanceof проверяет к какому классу пренадлежит объект
console.log(arr instanceof Array) //true
console.log(arr instanceof Object) //true, проверяет все унаследованные классы

//происходит такая проверка
console.log(arr.__proto__ === Array.prototype) //true
console.log(arr.__proto__.__proto__ === Object.prototype) //true