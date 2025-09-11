/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/


function capitalizeWords() {
    // Если строка пустая, возвращаем пустую строку
    if (str.length === 0) return '';
    
    let result = '';
    let capitalizeNext = true;

    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        
        // Если нужно capitalize следующий символ и это буква
        if (capitalizeNext && currentChar !== ' ') {
            result += currentChar.toUpperCase();
            capitalizeNext = false;
        } else {
            result += currentChar;
        }
        
        // Если текущий символ - пробел, следующий символ нужно capitalize
        if (currentChar === ' ') {
            capitalizeNext = true;
        }
    }
    
    return result;
}

// Тестирование функции
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"
console.log(capitalizeWords("  multiple   spaces  here  ")); // "  Multiple   Spaces  Here  "
console.log(capitalizeWords("")); // ""
console.log(capitalizeWords("single")); // "Single"
console.log(capitalizeWords("a b c d")); // "A B C D"