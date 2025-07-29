/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

// Функция, преобразующая первую букву слова в верхний регистр
const toUpperCaseFirstLetter = word => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

// Основная функция, обрабатывающая всю строку
const capitalizeWords = str => {
  // Разбиваем строку на массив слов
  const wordsArray = str.split(' ');

  // Применяем преобразование к каждому слову массива
  const capitalizedWords = wordsArray.map(toUpperCaseFirstLetter);

  // Объединяем обратно в строку
  return capitalizedWords.join(' ');
};

// Пример использования функции
console.log(capitalizeWords("hello world from javascript")); // Hello World From JavaScript
