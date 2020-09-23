//сократив надпись console.log
let t = numb=>console.log(numb)

let  fineResult = numb =>{
    console.log(`All good, all fine ${numb}`)
}


t(0);
let promise = new Promise(resolve => {
    setTimeout(()=>resolve(t(1)), 1000)
    t(2)
})
t(3)
promise.then(()=>t(4));
t(5)