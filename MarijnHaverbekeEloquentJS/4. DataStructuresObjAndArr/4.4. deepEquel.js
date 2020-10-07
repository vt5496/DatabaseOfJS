const checkObj = obj => typeof obj === 'object' && obj !== null

const getArrKeys = obj => Object.keys(obj)

const checkLength = (...objs) => obj.reduce((acc, item) => acc === true ?
    getArrKeys(objs[0]).length === getArrKeys(item).length : false, true)

const checkObjects = (...objs) => objs.reduce((acc, item) => acc === true ?
    checkObj(item) : false, true)

const propertiesEqual = (...objs) =>
    //переберем ключи первого объекта и вернем совпадают ли они с другими обьектами
    getArrKeys(objs[0]).map(key=> {
        //проверим является ли объектом значение ключа и запустим проверку такую же
        if (typeof objs[0][key] === 'object') return propertiesEqual(...objs.map(obj=> obj[key]))
            //проверка совпадает ли значение свойств
            //первого объекта с другими объектами и вернем одно логическое значени
            return objs.reduce((acc, obj) => acc === true ? objs[0][key] === obj[key] : false, true)

        //проверим все ли элементы массива true и вернем одно логическое значение
    }).reduce((acc, boolean) => acc === true ? boolean === true : false, true)


let obj = {object: 2, here: {is: "an"}};
console.log(propertiesEqual(obj, obj));
// → true
console.log(propertiesEqual(obj, {here: 1, object: 2}));
// → false
console.log(propertiesEqual(obj, {here: {is: "an"}, object: 2}));
// → true


const checkObjsIncludesKey = (key, ...objs) => objs.reduce((acc, item) => acc === true ?
    getArrKeys(item).includes(key) : false, true)

const keysEqual = (...objs) => getArrKeys(objs[0]).reduce((acc, key) => acc === true ?
    checkObjsIncludesKey(key, ...objs) : false, true)

const deepEqual = (...objs) =>
    checkObjects(...objs) && checkLength(...objs) && keysEqual(...objs)