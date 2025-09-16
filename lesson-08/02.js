/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */


function isNumeric(str) {
    // Проверяем, что аргумент - строка
    if (typeof str !== 'string') {
        return false;
    }
    
    // Убираем пробелы в начале и конце
    const trimmedStr = str.trim();
    
    // Проверяем пустую строку после trim
    if (trimmedStr === '') {
        return false;
    }
    
    let hasDot = false;
    let hasDigits = false;
    
    // Проверяем каждый символ в строке
    for (let i = 0; i < trimmedStr.length; i++) {
        const char = trimmedStr[i];
        
        // Разрешаем знак + или - только в начале строки
        if (i === 0 && (char === '-' || char === '+')) {
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
        
        // Любой другой символ - невалидный
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
