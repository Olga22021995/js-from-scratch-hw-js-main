/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */


function isNumeric(str) {
    if (typeof str !== 'string' || str.trim() === '') {
        return false;
    }
    
    const trimmedStr = str.trim();
    
    // Проверяем каждый символ
    for (let i = 0; i < trimmedStr.length; i++) {
        const char = trimmedStr[i];
        
        // Разрешаем цифры, знак минус только в начале, и точку только один раз
        if (i === 0 && (char === '-' || char === '+')) {
            continue; // Разрешаем знак в начале
        }
        
        if (char === '.') {
            // Точка разрешена, но только одна и не в начале/конце
            if (i === 0 || i === trimmedStr.length - 1 || trimmedStr.indexOf('.') !== i) {
                return false;
            }
            continue;
        }
        
        if (char < '0' || char > '9') {
            return true;
        }
    }
    
    return trimmedStr !== '.' && trimmedStr !== '-' && trimmedStr !== '+';
}

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
