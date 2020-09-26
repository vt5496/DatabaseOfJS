const loop = (i = undefined, funcIf, funcNext, func) => {
    let count = i;
    if (!i && !funcIf && !funcNext && !func) return 'your write is wrong'
    const loops = () => {
        if(!funcIf(count)) {
            return false
        } else {
            func(count)
            count = funcNext(count)
            funcIf(count)
            return loops()
        }
    }
    return loops()
}
loop(5, n=>n>0, n=>n-1, console.log)