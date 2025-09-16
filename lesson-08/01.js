/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/


function capitalizeWords(str) {
    let result = '';
    let capitalizeNext = true;
    
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        
        if (capitalizeNext && char !== ' ') {
            result += char.toUpperCase();
            capitalizeNext = false;
        } else {
            result += char;
        }
        
        if (char === ' ') {
            capitalizeNext = true;
        }
    }
    
    return result;
}

// Пример использования
console.log(capitalizeWords("hello world from javascript")); // "Hello World From Javascript"