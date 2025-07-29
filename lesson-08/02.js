/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

// Функция проверки, является ли строка представлением числа
function isNumeric(str) {
    // Пробуем привести строку к числу с плавающей точкой
    const num = parseFloat(str);
    
    // Проверка, является ли результатом NaN и равна ли исходная строка приведённому значению (чтобы избежать ложноположительных результатов)
    return !isNaN(num) && String(num) === str.trim();
}

// Тестовые случаи
console.log(isNumeric("1"));       // true
console.log(isNumeric("-1"));      // true
console.log(isNumeric("1.23"));    // true
console.log(isNumeric("1.23e4"));  // true
console.log(isNumeric("abc"));     // false
console.log(isNumeric("1a"));      // false