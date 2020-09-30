const trying = (a, b) => {
    try {
        let result = primitiveMultiply(a, b)
        console.log(result)
    } catch (e) {
        if (e.message === `Func can't do it`) {
            console.log(e.message)
            trying(a, b)
        }
    }
}

function primitiveMultiply(a, b) {
    let random = Math.round(Math.random() * 5)
    if (random <= 1) return a * b;
    const MultiplicatorUnitFailure = `Func can't do it`;
    throw new Error(MultiplicatorUnitFailure);
}

trying(12, 2)