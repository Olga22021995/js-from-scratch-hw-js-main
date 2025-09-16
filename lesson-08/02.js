/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    // Убираем пробелы в начале и конце строки
    const trimmedStr = str.trim();
    
    // Проверяем пустую строку после trim
    if (trimmedStr === '') {
        return false;
    }
    
    // Проверяем каждый символ в строке
    let hasDot = false;
    let hasDigits = false;
    
    for (let i = 0; i < trimmedStr.length; i++) {
        const char = trimmedStr[i];
        
        // Проверяем знак + или - только в начале строки
        if (i === 0 && (char === '+' || char === '-')) {
            continue;
        }
        
        // Проверяем точку
        if (char === '.') {
            if (hasDot) return false; // Если точка уже была - невалидно
            hasDot = true;
            continue;
        }
        
        // Проверяем цифры
        if (char >= '0' && char <= '9') {
            hasDigits = true;
            continue;
        }
        
        // Если символ не цифра, не точка и не знак в начале - невалидно
        return false;
    }
    
    // Должна быть хотя бы одна цифра
    return hasDigits;
}


// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
