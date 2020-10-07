import {SCRIPTS} from "../arrFonts.js";

const words = '英国的狗说"woof", 俄罗斯的狗说"тяв"'

const getSymbolFontObj = char => SCRIPTS.filter(item =>
    item.ranges.some(([from, to]) =>
        char.codePointAt() >= from && char.codePointAt() < to))[0]

const addToArrFontNameWithCount = (arr, symbolObj) => {
    if (arr.findIndex(item => item.name === symbolObj.name) === -1) {
        arr.push({name: symbolObj.name, count: 1})
    } else {
        arr.filter(item => item.name === symbolObj.name)[0].count++
    }
}

const getDominantFamily = words => {
    const arrWordsFamily = []
    for (let symbol of words) {
        const symbolObj = getSymbolFontObj(symbol)
        if (!symbolObj) continue;
        addToArrFontNameWithCount(arrWordsFamily, symbolObj)
    }
    return arrWordsFamily
}

const getTotalCount = arr => arr.reduce((total, {count}) => total + count, 0)

const fontsNameWithPercent = (arr, total) => {
    if (total === 0) return 'Words not found';
    return arr.map(item => `${item.name} ${Math.round(item.count / total * 100)}%`).join(', ')
}

console.log(fontsNameWithPercent(getDominantFamily(words),
    getTotalCount(getDominantFamily(words)))) //words

console.log(fontsNameWithPercent(getDominantFamily(''),
    getTotalCount(getDominantFamily('')))) //''

const newWords = "Hey, مساء الخير"

const addToArrFontDirectionWithCount = (arr, symbolObj) => {
    if (arr.findIndex(item => item.direction === symbolObj['direction']) === -1) {
        arr.push({direction: symbolObj['direction'], count: 1})
    } else {
        arr.filter(item => item.direction === symbolObj['direction'])[0].count++
    }
}

const getDominantDirection = words => {
    const arrWordsFamily = []
    for (let symbol of words) {
        const symbolObj = getSymbolFontObj(symbol)
        if (!symbolObj) continue;
        addToArrFontDirectionWithCount(arrWordsFamily, symbolObj)
    }
    return arrWordsFamily
}

const fontsDirectionWithPercent = (arr, total) => {
    if (total === 0) return 'Words not found';
    return arr.map(item => `${item.direction} ${Math.round(item.count / total * 100)}%`).join(', ')
}

const getDomainDirection = (arr, total) => {
    if (total === 0) return 'Words not found';
    return arr.reduce((biggest, item) => item.count > biggest.count ? item : biggest).direction
}

console.log(fontsDirectionWithPercent(getDominantDirection(newWords),
    getTotalCount(getDominantDirection(newWords))))
console.log(getDomainDirection(getDominantDirection(newWords), getTotalCount(getDominantDirection(newWords))))