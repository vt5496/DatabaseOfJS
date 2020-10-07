class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() <= 0.2) {
        return a * b
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}


const trying = (a, b) => {
    for (; ;) {
        try {
            return primitiveMultiply(a, b);
        } catch (e) {
            if (!(e instanceof MultiplicatorUnitFailure))
                throw e
        }
    }
}


console.log(trying(8, 8))