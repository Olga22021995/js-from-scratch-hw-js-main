/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        return false;
    }
    
    const trimmedStr = str.trim();
    
    // Проверяем специальные случаи
    if (trimmedStr === '.' || trimmedStr === '-' || trimmedStr === '+') {
        return false;
    }
    
    let hasDot = false;
    let hasSign = false;
    
    // Проверяем каждый символ
    for (let i = 0; i < trimmedStr.length; i++) {
        const char = trimmedStr[i];
        
        // Проверяем знак в начале
        if (i === 0 && (char === '-' || char === '+')) {
            hasSign = true;
            continue;
        }
        
        // Проверяем точку
        if (char === '.') {
            if (hasDot) return false; // Уже была точка
            hasDot = true;
            continue;
        }
        
        // Проверяем цифры
        if (char < '0' || char > '9') {
            return false;
        }
    }
    
    return true;
}
// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
