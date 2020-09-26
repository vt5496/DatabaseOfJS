const t = numb => console.log(numb)

const str = 'first, second, third'

const strToArr = str => str.split(', ');
const arrReverse = arr => arr.reverse();
const arrSort = arr => arr.sort();
const arrToStr = arr => arr.join(', ');

const promise = async (f, time = 1) => new Promise(
    resolve=> setTimeout(()=>resolve(f), time*1000)
)

let asynchrony = async () =>{
    let arr = await promise(strToArr(str));
    t(arr)
    let arrR = await promise(arrReverse(arr), 2);
    t(arrR)
    let arrS = await promise(arrSort(arrR), 3)
    t(arrS)
    let strEnd = await promise(arrToStr(arrS))
    t(strEnd)
}
asynchrony()
