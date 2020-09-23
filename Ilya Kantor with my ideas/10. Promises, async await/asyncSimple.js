//укоротим console.log
let t = numb => console.log(numb)

//простая async функция
let f = async () => {
    return 'START'
}

f().then(t)

//проследим выполнение async

//создадим функцию которая возвращает успешно завершенный промис через time c
let promiseTimeout = (numb, time = 1) => new Promise(resolve => {
    setTimeout(()=>resolve(t(numb)), time*1000)
})

t(0)

let func = async () =>{
    t(1);
    await promiseTimeout(2)
    await promiseTimeout(3, 2)
    await t(4)
}

func()
