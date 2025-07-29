/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
  // Преобразуем строку в число
  const number = parseFloat(str);

  // Проверяем, является ли результат корректным числом
  return !isNaN(number) && isFinite(number) && `${number}` === str.trim(); // строковое представление числа точно равно оригинальной строке без пробелов
}

// Тестирование функции
console.log(isNumeric("123"));           // true
console.log(isNumeric("123.45"));        // true
console.log(isNumeric("-123"));          // true
console.log(isNumeric("abc"));           // false
console.log(isNumeric("123abc"));        // false
console.log(isNumeric("123.45.67"));     // false
console.log(isNumeric("123."));          // false
console.log(isNumeric(".123"));          // false
console.log(isNumeric(""));              // false
console.log(isNumeric("123e+2"));        // true
console.log(isNumeric("Infinity"));      // false
console.log(isNumeric("NaN"));           // false
console.log(isNumeric("  123  "));      // true

// console.log(isNumeric("123")) // Ожидаемый результат: true
// console.log(isNumeric("12.3")) // Ожидаемый результат: true
// console.log(isNumeric("123abc")) // Ожидаемый результат: false
// console.log(isNumeric("abc")) // Ожидаемый результат: false
// console.log(isNumeric(" ")) // Ожидаемый результат: false
