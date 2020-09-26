function* f(numb) {
    while(numb!==0){
        yield numb--
    }
}
let generator = f(5)

for (k of generator){
    console.log(k)
}