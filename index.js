function capitalize(text){
    return text.charAt(0).toUpperCase() + text.slice(1)
}

function reverseString(text){
    return text.split("").reverse().join("")
}

class Calculator{
    add = (x, y) => {
        return x + y
    }
    subtract = (x, y) => {
        return x - y
    }
    divide = (x, y) => {
        if (y == 0) return 0
        return x / y
    }
    multiply = (x, y) => {
        return x * y
    }
}

function caesarCipher(text, shift){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    return text.split('').map(x => {
        if (x.charCodeAt(0) < 65) return x
        return alphabet.charAt((
            alphabet.split('').indexOf(x.toUpperCase())+shift)     
        % alphabet.length) 
    }).join('')
}

function analyzeArray(arr){
    return {
        average: arr.reduce((p, c) => p + c, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length,
    }
}

export {analyzeArray, capitalize, caesarCipher, Calculator, reverseString}