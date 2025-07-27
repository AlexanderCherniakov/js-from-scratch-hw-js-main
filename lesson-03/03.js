// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

// Функция нахождения наибольшего из трех чисел
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Использование функции
let result = findLargest(10, 20, 15);
console.log(result); // Выведет 20
