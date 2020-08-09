//в JS всё имеет встроенные прототипы
//при вызове свойств и методов у примитивных значений у них создается объект обёртка
//кроме null и undefined

console.log(Object.getPrototypeOf('Hello')) //String