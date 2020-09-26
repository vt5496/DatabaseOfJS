let operation = [
    {
        value: 'Done first',
        time: 2000
    },
    {
        value: 'Done second',
        time: 3000
    },
    {
        value: 'Done third',
        time: 1000
    }
]

let promises = operation.map(
    obj => new Promise(resolve => setTimeout(
        () => resolve(obj.value), obj.time)))

//Promise.all([promises])
//принимает массив промисов
//возвращает массив результатов после выполнения всех промисов
//при ошибки возвращает эту ошибку и всё
Promise.all(promises)
    .then(console.log) //[ 'Done first', 'Done second', 'Done third' ]


//Promise.allSettled([promises])
//принимает массив промисов
//возвращает массив результатов из объектов
//{status: 'fulfilled', value: ...объект ответа...},
//{status: 'rejected', reason: ...объект ошибки...}
//при ошибке не останавливается

Promise.allSettled(promises)
.then(console.log)
//[
//   { status: 'fulfilled', value: 'Done first' },
//   { status: 'fulfilled', value: 'Done second' },
//   { status: 'fulfilled', value: 'Done third' }
// ]


//Promise.race
//принимает массив промисов
//возвращает результат первого завершенного промиса и всё
Promise.race(promises)
.then(console.log) //Done third


//Promise.resolve
//заменяет Promise, который работает только с resolve
//let promise = Promise(resolve=>resolve(value))
//Promise.resolve(value) одинаковые две функции

Promise.resolve(5)
.then(console.log)