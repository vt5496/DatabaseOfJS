const obj1 = {key1: '1', key2: '2', key3: '3'}
const obj2 = {key1: '1', key2: '2', key3: '3'}
const obj3 = {ke: '1', key2: '2', key3: '3'}
const obj4 = {key1: '2', key2: '2', key3: '3'}
const obj5 = null

const checkObj = obj => typeof obj === 'object' && obj !== null

const getKeysArr = obj => Object.keys(obj)

const checkLength = (...obj) => obj.reduce((acc, item) => acc === true ?
    getKeysArr(obj[0]).length === getKeysArr(item).length : false, true)

const checkObjects = (...obj) => obj.reduce((acc, item) => acc === true ?
    checkObj(item) : false, true)

const checkObjsIncludesProperty = (property, ...obj) => obj.reduce((acc, item) => acc === true ?
    getKeysArr(item).includes(property) : false, true)

const objEquel = (...obj) => getKeysArr(obj[0]).reduce((acc, property) => acc === true ?
    checkObjsIncludesProperty(property, ...obj) : false, true)

const deepEquel = (...obj) =>
    checkObjects(...obj) && checkLength(...obj) && objEquel(...obj)

console.log(deepEquel(obj1, obj2, obj4))