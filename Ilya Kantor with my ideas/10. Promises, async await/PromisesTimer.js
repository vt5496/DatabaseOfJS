//промисы это конструкторы которые возвращают фукнцию executor
//когда промис создается, он запускается автоматически
//он завершается как достигнет resolve(успех) или reject(ошибка которая передастся в .catch)

let options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};
let start = 0;
//let waiter = setInterval(() => console.log(new Date().toLocaleString('ru', options)), 1000);
let secondomer = setInterval(() => console.log(`   🕐 Time: ${++start}s`), 1000)
//промис останавливается на первом вызове колбека resole or reject
let promise = new Promise(resolve => {
    console.log('🎉 Start. Will done 3 instructions after 6s')
    console.log(`   🕐️ Time: ${start}s`)
    setTimeout(() => resolve(console.log('First done ✅')), 2001)
})

    //у then можно передать две функции, первая запускается при успешном
    //завершении промиса, вторая при reject .then((result)=>{},(error)=>{}
    .then(() => new Promise(resolve => {
        setTimeout(() => resolve(console.log('Second done ✅')), 2000)
    }))

    .then(() => new Promise(resolve =>{
        setTimeout(() => resolve(console.log('Third done ✅')), 2000)
    }))

    //можно воспользоваться .catch(), который вызовет только функцию обработки ошибки
    .catch()

    //так же есть потребитель finally(), который запуститься полюбому в последним
    //finally не предназначен для обработки результата, он пропускает его дальше
    .finally(() => {
        clearInterval(secondomer)
        //clearInterval(waiter);
        console.log(`   🎊 Final interval after 6s`)
    })

    //result пропустит finally и дойдет до этого then
    //.then((result) => console.log(result))

// let promiseErr = new Promise((resolve, reject) =>{
//     console.log('start')
//     //reject лучше вызвать с объектом Error
//     setTimeout(() => reject(new Error('Woops')), 1000)
//
// })


