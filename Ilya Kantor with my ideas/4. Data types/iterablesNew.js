let obj = {
    from: 0,
    to: 10
}

obj[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {value: this.current++, done: false}
            } else {
                return {done: true}
            }
        }
    }
}



for (let k of obj) {
    console.log(k)
}

