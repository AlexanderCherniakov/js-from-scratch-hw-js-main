/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

/**
 * Удваивает каждый символ в строке.
 *
 * @param {string} str - Исходная строка.
 * @return {string} Новая строка с удвоенными символами.
 */
function doubleEachCharacter(str) {
    let doubledString = '';
    
    // Проходим по каждому символу исходной строки
    for (let char of str) {
        // Добавляем символ дважды в результирующую строку
        doubledString += char + char;
    }
    
    return doubledString;
}

// Пример использования:
console.log(doubleEachCharacter('hello')); // Результат: hheelllloo
