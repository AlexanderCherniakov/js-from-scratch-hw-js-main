/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

/**
 * Функция находит общие элементы двух массивов.
 *
 * @param {Array} array1 - первый массив
 * @param {Array} array2 - второй массив
 * @return {Array} массив общих элементов
 */
function findCommonElements(array1, array2) {
    let commonElements = [];
    
    // Перебираем первый массив
    for (let item of array1) {
        // Если элемент первого массива также находится во втором,
        // добавляем его в общий массив
        if (array2.includes(item)) {
            commonElements.push(item);
        }
    }
    
    return commonElements;
}

// Пример использования:
console.log(findCommonElements([1, 2, 3], [2, 3, 4])); // Вернет [2, 3]
