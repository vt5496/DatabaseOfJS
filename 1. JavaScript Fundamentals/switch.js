let k = 5;

switch (k) {
    case 1:
        break;
    case 2:
        console.log(2);
        break;
    case 3: //группировка case
    case 5:
        console.log(5) //без break, не приостановил исполнение кода
    case 5:
        console.log(true)
        break;
    default:
        console.log('Not found')

}

console.log(global.k)