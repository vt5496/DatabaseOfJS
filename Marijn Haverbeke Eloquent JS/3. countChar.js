const countChar = (str, char) => {
    let strLength = --str.length;
    let count = 0;
    const recursion = () => {
        if (strLength < 0) {
            return count;
        } else {
            if (str[strLength] === char) {
                count++;
                --strLength;
                return recursion()
            } else {
                --strLength;
                return recursion();
            }
        }
    }
    return recursion()
}

console.log(countChar('kjkk', 'k'))