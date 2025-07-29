/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */

function isNumeric(str) {
    return /^-?\d+(?:\.\d+)?(?:e[-+]?\d+)?$/.test(str);
}

// Примеры тестирования:
console.log(isNumeric('1'));          // true
console.log(isNumeric('-1'));         // true
console.log(isNumeric('1.23'));       // true
console.log(isNumeric('1.23e4'));     // true
console.log(isNumeric('-1.23E-4'));   // true
console.log(isNumeric('abc'));        // false
console.log(isNumeric('1.'));         // false
console.log(isNumeric('.1'));         // false
console.log(isNumeric('1e'));         // false