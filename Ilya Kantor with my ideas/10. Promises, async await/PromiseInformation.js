//resolve это колбек и он вызывается при успешном завершении успешное завершение промиса
//reject в случае ошибки

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('1'), 1000);
    setTimeout(() => reject('0'), 1500)
})
    //метод вызывается в случае успешного завершения Promise then(f, f)
    .then(
        result => { //в случае успеха
            console.log(result);
            return result * 5
        },
        error => { //в случае ошибки
            console.log(error)
        })

    //возвратим промис после 2 сек
    //так можно строить цепочки из асинхронных действий
    .then(result => {
        console.log(result)
        return new Promise(
            resolve => setTimeout(
                () => resolve(result * 5), 2000))
    })
    .then(result => console.log(result))

    //выполняется в любом случае когда промис завершиться
    .finally(() => console.log('Завершить окно загрузки'))

    //перехватчик ошибок, реагирует на ошибки и на throw
    .catch(error => console.log('Ошибка обработана, перейти дальше'))

    //в случае успешной обработке ошибки действие переходит к следующему обработчику
    .then(() => console.log("Программа продолжает выполняться"))