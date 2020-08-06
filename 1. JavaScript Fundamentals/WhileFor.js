t = (...t) => console.log(...t);

let i = 0;

t(`
#1 while`)
while (true) {
    //бесконечный цикл, но прерывается оператором break;
    t(i);
    ++i;
    if (i === 6) break;
}

t(`
#2 do & while`)
do {
    t(i)
    --i
} while (i !== 0);

t(`
#3 for`)

for (i; i <= 5; i++){
    if (i % 2 !== 0) continue; //пропускает нечетные
    t(i)
}