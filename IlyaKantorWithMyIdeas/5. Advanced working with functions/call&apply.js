//создадим объект с методом sayInf
let vlad = {
    name: 'Vladyslav',
    surname: 'Tkachenko',
    sayInf(age, position) {
        console.group(`${this.name} info:`)
        console.log(`Name ${this.name}`);
        console.log(`Surname ${this.surname}`);
        console.log(`Age ${age}`);
        console.log(`Position ${this.position}`);
        console.groupEnd()
    }
}

vlad.sayInf(21, 'Front-end');

//cоздадим объект с похожими свойствами
let lena = {
    name: 'Lena',
    surname: 'Gorobets'
}

//bind позволяет задать контекст без вызова, bind(context, arg1, arg2, arg...)
let sayLena = vlad.sayInf.bind(lena, 18, 'Back-end');
sayLena()

//call позволяет вызвать функцию в выбранном контексте, call(context, arg1, arg...)
vlad.sayInf.call(lena) //Lena Gorobets undefined undefined
vlad.sayInf.call(lena, 18, 'Back-end')

//apply работает как call, но аргументы передаються массивом apply(context, [arg1, arg2, arg...]
vlad.sayInf.apply(lena, [18, 'Back-end'])


//создадим функцию когда для одинаковых х возвращает всегда один и тот же результат
let square = function (x) {
    return x ** 2
}

//cacheDecorator - это декоратор, специальная функция, которая
//принимает другую функцию и изменяет её поведение
let cacheDecorator = (func) => {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {
            console.log('Cache');
            return cache.get(x)
        }

        let result = func(x) //или func.call(this, x) во втором примере
        cache.set(x, result);
        return result;
    }
}

//зададим кеширование функции square
square = cacheDecorator(square)

console.log(square(2))
console.log(`Again ${square(2)}`)

console.log(square(3))
console.log(`Again ${square(3)}`)

//второй пример
//попробуем тоже самое, но с методом объекта
let user = {
    name: 'Vlad',
    surname: 'Tkachenko',
    age: 21,
    myAge(){return this.age},
    myAgeBig(x){
        return x + this.myAge()
    }
}



user.myAgeBig = cacheDecorator(user.myAgeBig.bind(user)) //если func.call(this, x), то без bind

console.log(user.myAgeBig(2))
console.log(user.myAgeBig(2)) //cache