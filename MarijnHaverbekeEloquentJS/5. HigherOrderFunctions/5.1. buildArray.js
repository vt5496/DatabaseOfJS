const buildOneArr = arr => arr.reduce((acc, item) => acc.concat(item), [])

console.log(buildOneArr([[1, 2, 3], [4, 5], [6]]))